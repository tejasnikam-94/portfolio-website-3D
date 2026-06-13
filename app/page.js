
import Hero from '../components/Hero';
import Section from '../components/Section';
export default function Page(){
  return (
  <main>
    <Hero />
    <Section title="About" text="Senior Data Scientist at Mastercard, PhD Candidate at IIT Bombay, AI Researcher and Patent Inventor." />
    <Section title="Patents" text="Financial Streaming Fingerprints, ClearMerchant, Multilingual Contextual Translation." />
    <Section title="Projects" text="Transaction Intelligence, Financial Entity Recognition, Credit Risk Models, Agentic AI." />
    <Section title="Research" text="Snow Avalanche Detection using SAR Imagery and Change Detection Transformers." />
  </main>)
}
