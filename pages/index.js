import { Inter } from "next/font/google";

export default function Home() {
  return (
    <main className={`h-full w-full bg-[#E4EFFF] absolute -z-20`}>
      <img src="/TangleContent.png" className="absolute top-0 right-0 -z-10" />
      <div className="container mx-auto pt-14">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center">
            <span className="bg-logo rounded-full h-10 w-10 flex items-center justify-center">
              W
            </span>
            <h3 className="text-dark ml-4">Wumbo</h3>
          </div>
          <ul className="flex space-x-12 text-[#001533]">
            <li className="text-dark font-bold">Top</li>
            <li>For Everyone</li>
            <li>Features</li>
            <li>Preview</li>
            <li>License</li>
          </ul>
          <h3 className="bg-white px-11 py-2.5 rounded-lg">Download</h3>
        </nav>
        {/* Hero Section */}
        <div className="flex">
          <div className="w-1/2 flex justify-center flex-col">
            <div className="max-w-sm">
              <h1 className="text-5xl">
                Beautiful Design For{" "}
                <span className="underline font-bold">Social Media</span>{" "}
                Content
              </h1>
              <p className="mt-5 text-muted">
                Figma social media content templates for branding, marketing,
                insights, and more. Free for personal and commercial use!
              </p>
              <div className="flex mt-10 gap-4">
                <button className="px-8 py-5 bg-primary text-white rounded-md hover:bg-primaryLight hover:text-dark transition-all">
                  Download Now
                </button>
                <button className="px-8 py-5 bg-primaryLight text-primary rounded-md hover:bg-primary hover:text-white transition-all">
                  See in Action
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img src="/hero.png" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}
