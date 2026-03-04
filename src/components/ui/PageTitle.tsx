interface PageTitleProps {
  children: React.ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <div className="bg-black dark:bg-white w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-5">
        <h1 className="text-4xl lg:text-5xl font-bold text-white dark:text-black">
          {children}
        </h1>
      </div>
    </div>
  );
}
