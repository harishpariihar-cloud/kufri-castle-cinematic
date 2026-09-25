import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, MessageCircle, ArrowUpRight, Mountain } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { hotel } from "@/lib/hotel";

const links = [
  ["Home", "/"], ["Rooms", "/rooms"], ["About", "/about"],
  ["Amenities", "/amenities"], ["Dining", "/dining"], ["Experiences", "/experiences"],
  ["Gallery", "/gallery"], ["Location", "/location"], ["Contact", "/contact"],
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 30);
    listener(); window.addEventListener("scroll", listener, { passive: true });
    return () => window.removeEventListener("scroll", listener);
  }, []);
  useEffect(() => setOpen(false), [path]);
  return <div className="min-h-screen bg-background">
    <header className={`site-header ${scrolled || path !== "/" ? "site-header-solid" : ""}`}>
      <Link to="/" className="brand" aria-label="Hotel Beercastle Kufri home"><Mountain/><span>HOTEL BEERCASTLE<small>KUFRI · HIMACHAL</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,to]) => <Link key={to} to={to} activeOptions={{exact:to==="/"}}>{label}</Link>)}</nav>
      <Button asChild variant="gold" size="lg" className="header-book"><Link to="/contact">Book Your Stay</Link></Button>
      <Button variant="nav" size="icon" className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</Button>
      <div className={`mobile-menu ${open ? "mobile-menu-open" : ""}`}>
        <nav>{links.map(([label,to], i) => <Link key={to} to={to}><span>0{i+1}</span>{label}</Link>)}</nav>
        <Button asChild variant="gold" size="xl"><Link to="/contact">Book Your Stay <ArrowUpRight/></Link></Button>
      </div>
    </header>
    <main>{children}</main>
    <footer className="footer">
      <div className="footer-cta"><p className="eyebrow">Your Himalayan pause</p><h2>Escape to the Mountains of Kufri</h2><Button asChild variant="gold" size="xl"><Link to="/contact">Plan your stay <ArrowUpRight/></Link></Button></div>
      <div className="footer-grid"><div><div className="footer-brand">HOTEL BEERCASTLE <span>KUFRI</span></div><p>{hotel.address}</p><a href={hotel.phoneHref}>{hotel.phone}</a></div><div><p className="footer-label">Explore</p><div className="footer-links">{links.filter(([l])=>l!=="Amenities").map(([label,to])=><Link key={to} to={to}>{label}</Link>)}</div></div><div><p className="footer-label">Arrival</p><p>Check-in · 12:00 PM<br/>Check-out · 11:00 AM</p><p>Hotel + Homestay</p></div></div>
      <div className="footer-bottom"><span>© 2026 Hotel Beercastle Kufri</span><span>Apple Point Road · Mahasu Peak</span></div>
    </footer>
    <Button asChild variant="floating" size="xl" className="desktop-float"><Link to="/contact">Book your stay <ArrowUpRight/></Link></Button>
    <div className="mobile-booking"><a href={hotel.phoneHref}><Phone/>Call</a><a href={hotel.whatsapp}><MessageCircle/>WhatsApp</a><Link to="/contact"><ArrowUpRight/>Book Now</Link></div>
  </div>;
}

export function PageHero({ image, eyebrow, title, text, align="left" }: {image:string; eyebrow:string; title:string; text:string; align?:"left"|"center"}) {
  return <section className={`page-hero ${align==="center"?"page-hero-center":""}`}><img src={image} alt=""/><div className="image-shade"/><div className="page-hero-content"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><p>{text}</p></div></section>;
}

export function SectionTitle({ eyebrow, title, text }: {eyebrow:string; title:string; text?:string}) { return <div className="section-title"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text&&<p>{text}</p>}</div>; }

export function BookingStrip() { return <section className="booking-strip"><div><p className="eyebrow light">Stay close to Mahasu Peak</p><h2>Wake up in the hills.</h2><p>Rooms from approximately ₹1,154 per night, depending on season and availability.</p></div><Button asChild variant="cream" size="xl"><Link to="/contact">Enquire for your dates <ArrowUpRight/></Link></Button></section>; }