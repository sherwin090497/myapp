import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/button";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Welcome to my Website" }, 
    { name: "description", content: "Welcome to my personal website!" }, 
  ]
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-8"> 
        <header className="flex flex-col items-center gap-4"> 
          <h1 className="leading-tight text-4xl font-bold text-gray-400 text-center">
            Sherwin Labadan
          </h1>
          <p className="text-lg text-white text-center">
            Software Engineer | Web Developer | Tech Enthusiast
          </p>
        </header>
        <nav className="flex gap-4">
          <Link to="/resume"> 
            <Button variant="outline">Resume</Button>
          </Link>
          <Link to="/hobbies"> 
            <Button variant="outline">Hobbies</Button>
          </Link>
        </nav>
      </div>
    </div>
  );
}
