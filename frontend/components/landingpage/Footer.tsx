export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        {/* Brand */}
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center"
          >
            <div className="h-5 w-6 mr-2 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-primary" />
            Health Wise
          </a>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Advancing preventive healthcare through clinical data integration
            and proactive wellness monitoring.
          </p>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Support</h3>
          <a href="#faq" className="opacity-60 hover:opacity-100">
            FAQ
          </a>
          <a href="#" className="opacity-60 hover:opacity-100">
            Contact Support
          </a>
          <a href="#" className="opacity-60 hover:opacity-100">
            Help Center
          </a>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Resources</h3>
          <a href="#" className="opacity-60 hover:opacity-100">
            Public Health Info
          </a>
          <a href="#" className="opacity-60 hover:opacity-100">
            Wellness Tips
          </a>
          <a href="#" className="opacity-60 hover:opacity-100">
            COVID-19 Updates
          </a>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Legal</h3>
          <a href="#" className="opacity-60 hover:opacity-100">
            Privacy Policy
          </a>
          <a href="#" className="opacity-60 hover:opacity-100">
            Terms of Service
          </a>
          <a href="#" className="opacity-60 hover:opacity-100">
            Consent Policy
          </a>
        </div>

        {/* Community */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Connect</h3>
          <a href="#" className="opacity-60 hover:opacity-100">
            GitHub
          </a>
          <a href="#" className="opacity-60 hover:opacity-100">
            LinkedIn
          </a>
          <a href="#" className="opacity-60 hover:opacity-100">
            Twitter
          </a>
        </div>
      </section>

      {/* Copyright */}
      <section className="container pb-14 text-center text-sm text-muted-foreground">
        <p>
          &copy; 2026 Health Wise Portal. Developed by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="#"
            className="text-primary hover:underline font-medium"
          >
            InnoStack
          </a>
        </p>
      </section>
    </footer>
  );
};
