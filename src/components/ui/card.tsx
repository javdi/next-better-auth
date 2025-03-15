export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={`bg-white shadow-md p-6 rounded-lg ${className}`}>{children}</div>;
  }
  
  export function CardHeader({ children }: { children: React.ReactNode }) {
    return <div className="mb-4">{children}</div>;
  }
  
  export function CardTitle({ children }: { children: React.ReactNode }) {
    return <h2 className="text-xl font-semibold">{children}</h2>;
  }
  
  export function CardDescription({ children }: { children: React.ReactNode }) {
    return <p className="text-gray-600">{children}</p>;
  }
  
  export function CardContent({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  }
  
  export function CardFooter({ children }: { children: React.ReactNode }) {
    return <div className="mt-4">{children}</div>;
  }
  