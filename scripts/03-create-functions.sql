-- Function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url, username)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url',
    NEW.raw_user_meta_data->>'username'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user registration
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Function to update download count
CREATE OR REPLACE FUNCTION public.increment_download_count()
RETURNS TRIGGER AS $$
BEGIN
  -- Update script download count
  UPDATE scripts 
  SET downloads_count = downloads_count + 1,
      updated_at = NOW()
  WHERE id = NEW.script_id;
  
  -- Update user download count if user is logged in
  IF NEW.user_id IS NOT NULL THEN
    UPDATE profiles 
    SET downloads_count = downloads_count + 1,
        updated_at = NOW()
    WHERE id = NEW.user_id;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for download count
DROP TRIGGER IF EXISTS on_download_created ON downloads;
CREATE TRIGGER on_download_created
  AFTER INSERT ON downloads
  FOR EACH ROW EXECUTE PROCEDURE public.increment_download_count();

-- Function to update post count in forums
CREATE OR REPLACE FUNCTION public.update_forum_post_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE forums 
    SET posts_count = posts_count + 1,
        updated_at = NOW()
    WHERE id = NEW.forum_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE forums 
    SET posts_count = posts_count - 1,
        updated_at = NOW()
    WHERE id = OLD.forum_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Triggers for forum post count
DROP TRIGGER IF EXISTS on_post_created ON posts;
CREATE TRIGGER on_post_created
  AFTER INSERT ON posts
  FOR EACH ROW EXECUTE PROCEDURE public.update_forum_post_count();

DROP TRIGGER IF EXISTS on_post_deleted ON posts;
CREATE TRIGGER on_post_deleted
  AFTER DELETE ON posts
  FOR EACH ROW EXECUTE PROCEDURE public.update_forum_post_count();

-- Function to update script rating
CREATE OR REPLACE FUNCTION public.update_script_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE scripts 
  SET 
    rating = (
      SELECT COALESCE(AVG(rating), 0) 
      FROM reviews 
      WHERE script_id = COALESCE(NEW.script_id, OLD.script_id)
    ),
    rating_count = (
      SELECT COUNT(*) 
      FROM reviews 
      WHERE script_id = COALESCE(NEW.script_id, OLD.script_id)
    ),
    updated_at = NOW()
  WHERE id = COALESCE(NEW.script_id, OLD.script_id);
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Triggers for script rating
DROP TRIGGER IF EXISTS on_review_changed ON reviews;
CREATE TRIGGER on_review_changed
  AFTER INSERT OR UPDATE OR DELETE ON reviews
  FOR EACH ROW EXECUTE PROCEDURE public.update_script_rating();
