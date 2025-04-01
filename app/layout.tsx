import "@/src/styles.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="flex justify-center">
        <div className="max-w-md w-full py-10">{children}</div>
      </body>
    </html>
  );
}
