import Link from "next/link";
import { PageWrapper } from "@/modules/shared/page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
      <h1 className="text-4xl font-bold">Welcome to our App</h1>
      <Link href="/terminal" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer inline-block">
        Enter
      </Link>
    </PageWrapper>
  );
}
