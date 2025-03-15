export function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
    return <label htmlFor={htmlFor} className="block font-medium">{children}</label>;
  }
  