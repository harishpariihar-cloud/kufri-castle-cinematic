import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null); const [visible,setVisible]=useState(false);
  useEffect(()=>{const el=ref.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e?.isIntersecting){setVisible(true);o.disconnect();}},{threshold:.12});o.observe(el);return()=>o.disconnect();},[]);
  return <div ref={ref} className={`reveal ${visible?"is-visible":""} ${className}`}>{children}</div>;
}