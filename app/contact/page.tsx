import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Mail, Send } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="space-y-8 py-8">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
            Contact Us
          </span>
        </h1>
        <p className="text-lg text-purple-100">Have questions or need assistance? We're here to help.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-purple-950/50 border-purple-800">
          <CardHeader>
            <CardTitle className="text-xl text-purple-200">Send us a message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-purple-200">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                className="bg-purple-900/30 border-purple-700 focus:border-purple-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-purple-200">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                className="bg-purple-900/30 border-purple-700 focus:border-purple-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-purple-200">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="What is this regarding?"
                className="bg-purple-900/30 border-purple-700 focus:border-purple-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-purple-200">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                rows={5}
                className="bg-purple-900/30 border-purple-700 focus:border-purple-500"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-purple-950/50 border-purple-800">
            <CardHeader>
              <CardTitle className="text-xl text-purple-200">Other ways to reach us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-purple-400 mt-0.5" />
                <div>
                  <h3 className="text-lg font-medium text-purple-200">Email</h3>
                  <p className="text-purple-300">support@purpleware.com</p>
                  <p className="text-sm text-purple-400 mt-1">We typically respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageSquare className="h-5 w-5 text-purple-400 mt-0.5" />
                <div>
                  <h3 className="text-lg font-medium text-purple-200">Discord</h3>
                  <p className="text-purple-300">Join our Discord server for faster support</p>
                  <Link href="/discord" className="text-sm text-purple-500 hover:text-purple-400 mt-1 inline-block">
                    Join our Discord
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-950/50 border-purple-800">
            <CardHeader>
              <CardTitle className="text-xl text-purple-200">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-purple-200">How do I download a cheat?</h3>
                <p className="text-purple-300">
                  Simply navigate to the FPS Cheats page, find the cheat you want, and click the download button.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-purple-200">Are the cheats safe to use?</h3>
                <p className="text-purple-300">
                  Our cheats use advanced techniques to remain undetected, but no cheat is 100% safe. Use at your own
                  risk.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-purple-200">How often are cheats updated?</h3>
                <p className="text-purple-300">
                  We update our cheats regularly to ensure compatibility with the latest game versions.
                </p>
              </div>
              <Link href="/faq" className="text-purple-500 hover:text-purple-400 inline-block mt-2">
                View all FAQs
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
