import CaseTimeline from "./components/CaseTimeline";
import EvidenceLocker from "./components/EvidenceLocker";
import ResponderNotes from "./components/ResponderNotes";
import CaseHeader from "./components/CaseHeader";

interface CasePageProps { params: { caseId: string }; }

export default function CaseDetailPage({ params }: CasePageProps) {
  return <div className="min-h-screen bg-slate-950 text-slate-100 p-6 space-y-4"><CaseHeader caseId={params.caseId} /><div className="grid grid-cols-1 lg:grid-cols-3 gap-4"><section className="lg:col-span-2"><CaseTimeline /></section><section className="lg:col-span-1 space-y-4"><EvidenceLocker /><ResponderNotes /></section></div></div>;
}
