import RBACPanel from "./components/RBACPanel";
import AuditLog from "./components/AuditLog";
import EncryptionStatus from "./components/EncryptionStatus";

export default function SecurityPage() {
  return <div className="min-h-screen bg-slate-950 text-slate-100 p-6 grid grid-cols-1 lg:grid-cols-3 gap-4"><RBACPanel /><AuditLog /><EncryptionStatus /></div>;
}
