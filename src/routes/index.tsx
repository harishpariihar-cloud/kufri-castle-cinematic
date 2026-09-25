import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, BedDouble, Car, Heart, MapPin, Mountain, Trees, Utensils, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingStrip, SectionTitle } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
import { pageHead, photos } from "@/lib/hotel";

export const Route = createFileRoute("/")({
  head: () => ({...pageHead("Hotel Beercastle Kufri | Mountain Hotel near Mahasu Peak","Stay at Hotel Beercastle Kufri, a scenic hotel and homestay near Mahasu Peak with comfortable rooms, dining, Wi-Fi and parking.","/"), scripts:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":["Hotel","LocalBusiness"],name:"Hotel Beercastle Kufri",telephone:"+91 80057 94280",address:{"@type":"PostalAddress",streetAddress:"Apple Point Road, Mahasu Peak",addressLocality:"Kufri",addressRegion:"Himachal Pradesh",postalCode:"171209",addressCountry:"IN"},priceRange:"₹₹",checkinTime:"12:00",checkoutTime:"11:00"})}]}),
  component: Home,
});

const reasons = [[Mountain,"Panoramic Mountain Views"],[MapPin,"Near Mahasu Peak"],[Trees,"Peaceful Himalayan Surroundings"],[BedDouble,"Comfortable Rooms"],[Utensils,"On-Site Dining"],[Wifi,"Free Wi-Fi"],[Car,"Free Parking"],[Heart,"Friendly Hospitality"]] as const;

function Home(){return <>
  <section className="home-hero"><img src={photos.exteriorDay} alt="Hotel Beercastle Kufri on a green Himalayan hillside"/><div className="home-shade"/><div className="home-copy"><p className="location-pill"><MapPin/> Mahasu Peak · Kufri · Himachal Pradesh</p><h1>Your Mountain<br/><em>Escape</em> in Kufri</h1><p>Stay close to Mahasu Peak with beautiful Himalayan surroundings, comfortable rooms and the warmth of a mountain homestay.</p><div className="hero-actions"><Button asChild variant="gold" size="xl"><Link to="/contact">Book Your Stay <ArrowUpRight/></Link></Button><Button asChild variant="hero" size="xl"><Link to="/rooms">Explore Rooms</Link></Button></div></div><a className="scroll-cue" href="#welcome"><span>Discover</span><ArrowDown/></a>
  </section>
  <section id="welcome" className="intro-section"><Reveal className="intro-image"><img src={photos.roomBlue} alt="Guest room with timber ceiling at Hotel Beercastle Kufri"/></Reveal><Reveal className="intro-copy"><SectionTitle eyebrow="Welcome to Hotel Beercastle Kufri" title="An unhurried stay, high in the hills."/><p>On Apple Point Road near Mahasu Peak, our hotel and homestay offers a peaceful base for exploring Kufri—grounded in simple comfort, warm hospitality and the natural rhythm of the mountains.</p><div className="stay-facts"><span><strong>12 PM</strong>Check-in</span><span><strong>11 AM</strong>Check-out</span><span><strong>₹1,154</strong>Approx. from</span></div><Link className="text-link" to="/about">Our story <ArrowUpRight/></Link></Reveal></section>
  <section className="reasons-section"><Reveal><SectionTitle eyebrow="Why stay with us" title="Everything you need. Nothing you don't." text="A comfortable hill stay shaped by its setting, with thoughtful essentials for days spent discovering Kufri."/></Reveal><div className="reasons-layout"><Reveal className="reasons-image"><img src={photos.approach} alt="Scenic Apple Point Road near Hotel Beercastle Kufri"/></Reveal><div className="reasons-list">{reasons.map(([Icon,label],i)=><Reveal key={label} className="reason-item"><span>0{i+1}</span><Icon/><h3>{label}</h3></Reveal>)}</div></div></section>
  <section className="image-break"><img src={photos.exteriorNight} alt="Hotel Beercastle Kufri glowing in the evening"/><div><p className="eyebrow light">From daylight to starlight</p><h2>A quieter side<br/>of Kufri.</h2><Button asChild variant="hero" size="xl"><Link to="/gallery">View the gallery</Link></Button></div></section>
  <BookingStrip/>
</>}