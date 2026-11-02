import { ArrowLeft, Download, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function ResumePage() {
  return <main className="resume-page"><header className="resume-header"><a href="/"><ArrowLeft size={16}/> Back to portfolio</a><a className="primary" href={profile.resumeUrl} download><Download size={16}/> Download PDF</a></header><section className="resume-intro"><FileText size={25}/><div><p className="eyebrow">Curriculum vitae</p><h1>{profile.name}&apos;s resume</h1></div></section><iframe className="resume-viewer" src={profile.resumeUrl} title={`${profile.name}'s resume`} /></main>;
}
