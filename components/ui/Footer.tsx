import Link from "next/link"

const Footer = () => {
    return (
        <footer className="border-t mt-20 bg-primary dark:bg-transparent">
            <div className="container mx-auto px-4 py-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand */}
                    <div>
                        <h2 className="text-lg font-semibold text-white">InviteKu</h2>
                        <p className="text-sm text-muted-foreground mt-2">
                            Platform untuk membuat undangan digital modern
                            dengan fitur RSVP dan link tamu otomatis.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-medium mb-3 text-white">Menu</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/template">Template</Link>
                            </li>
                            <li>
                                <Link href="/pricing">Pricing</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-medium mb-3 text-white">Contact</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Email: hello@inviteku.com</li>
                            <li>Instagram: @inviteku</li>
                            <li>WhatsApp: +62 812 xxxx xxxx</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} InviteKu. All rights reserved.
                </div>

            </div>
        </footer>
    )
}

export default Footer