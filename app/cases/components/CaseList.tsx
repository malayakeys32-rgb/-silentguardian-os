import CaseCard from "./CaseCard";

const cases = [{ id: "SG-001", status: "Active", title: "Fentanyl Exposure - Downtown", updated: "5 min ago" }, { id: "SG-002", status: "Open", title: "Suspicious Activity - Transit Hub", updated: "20 min ago" }];

export default function CaseList() {
  return <div className="grid gap-3">{cases.map((caseData) => <CaseCard key={caseData.id} caseData={caseData} />)}</div>;
}
