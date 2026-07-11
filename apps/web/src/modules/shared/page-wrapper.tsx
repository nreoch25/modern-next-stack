import type { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="w-full py-32 px-16">{children}</div>;
};

export { PageWrapper };
