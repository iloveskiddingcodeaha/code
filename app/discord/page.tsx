import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare, Users, Headphones, Gift, Shield } from "lucide-react"

export default function Discord() {
  // Replace this URL with your actual Discord invite link
  const discordInviteUrl = "https://discord.gg/jnN6VHZZ"

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
            Join Our Discord Community
          </span>
        </h1>
        <p className="text-lg text-purple-100 max-w-3xl">
          Connect with other gamers, get support, and stay updated on the latest cheats and updates.
        </p>
      </div>

      {/* Main Discord Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[400px] rounded-xl overflow-hidden order-2 md:order-1">
          <div className="absolute inset-0 bg-indigo-600 rounded-xl blur-xl opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md"></div>
              <svg
                className="relative z-10 w-full h-full"
                width="71"
                height="55"
                viewBox="0 0 71 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                  fill="#5865F2"
                />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-950 to-transparent h-1/3"></div>
          <div className="absolute bottom-4 left-0 right-0 text-center text-purple-200 font-medium text-lg">
            Purpleware Discord
          </div>
        </div>

        <div className="space-y-6 order-1 md:order-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-200">Why Join Our Discord?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Users className="h-5 w-5 text-purple-400 mr-2 mt-0.5 shrink-0" />
                <span className="text-purple-100">Connect with a community of like-minded gamers</span>
              </li>
              <li className="flex items-start">
                <MessageSquare className="h-5 w-5 text-purple-400 mr-2 mt-0.5 shrink-0" />
                <span className="text-purple-100">Get instant support and troubleshooting help</span>
              </li>
              <li className="flex items-start">
                <Gift className="h-5 w-5 text-purple-400 mr-2 mt-0.5 shrink-0" />
                <span className="text-purple-100">Access exclusive giveaways and promotions</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-purple-400 mr-2 mt-0.5 shrink-0" />
                <span className="text-purple-100">Stay updated on the latest cheat updates and security patches</span>
              </li>
              <li className="flex items-start">
                <Headphones className="h-5 w-5 text-purple-400 mr-2 mt-0.5 shrink-0" />
                <span className="text-purple-100">Voice chat with other players during gaming sessions</span>
              </li>
            </ul>
          </div>

          <div className="pt-4">
            <Link href={discordInviteUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-6 text-lg"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  width="71"
                  height="55"
                  viewBox="0 0 71 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                    fill="currentColor"
                  />
                </svg>
                Join Our Discord Server
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Server Preview */}
      <div className="bg-purple-950/50 border border-purple-800 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-purple-200 mb-6">What to Expect in Our Server</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-purple-900/40 p-5 rounded-lg">
            <h3 className="text-lg font-medium text-purple-200 mb-2"># announcements</h3>
            <p className="text-purple-300">
              Stay updated with the latest news, updates, and announcements about our cheats and services.
            </p>
          </div>
          <div className="bg-purple-900/40 p-5 rounded-lg">
            <h3 className="text-lg font-medium text-purple-200 mb-2"># support</h3>
            <p className="text-purple-300">
              Get help with installation, configuration, or troubleshooting from our team and community members.
            </p>
          </div>
          <div className="bg-purple-900/40 p-5 rounded-lg">
            <h3 className="text-lg font-medium text-purple-200 mb-2"># general</h3>
            <p className="text-purple-300">
              Chat with other members, share your gaming experiences, and make new friends in the community.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-purple-200 mb-4">Ready to join our growing community?</p>
        <Link href={discordInviteUrl} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
          >
            Join Discord Now
          </Button>
        </Link>
      </div>
    </div>
  )
}
