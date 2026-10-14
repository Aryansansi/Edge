import { useState } from "react";
import { toast, Toaster } from "sonner";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleHelp,
  CreditCard,
  FileText,
  Gauge,
  Layers3,
  Menu,
  Sparkles,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";

type PlanId = "growth-pro" | "enterprise-scale";

interface Plan {
  id: PlanId;
  name: string;
  price: string;
  period: string;
  credits: string;
  capacity: number;
  badge: string;
  description: string;
  features: string[];
}

const plans: Plan[] = [
  {
    id: "growth-pro",
    name: "Growth Pro",
    price: "$499",
    period: "per month",
    credits: "10,000 AI Credits / mo",
    capacity: 10000,
    badge: "Current plan",
    description: "For ambitious teams building repeatable growth systems.",
    features: ["Up to 5 team seats", "Standard priority generation", "Multi-channel templates", "Basic performance analytics"],
  },
  {
    id: "enterprise-scale",
    name: "Enterprise Scale",
    price: "$1,299",
    period: "per month",
    credits: "50,000 AI Credits / mo",
    capacity: 50000,
    badge: "Recommended",
    description: "For marketing teams ready to make every channel move faster.",
    features: ["Unlimited team seats", "Custom brand voice AI model", "Priority queue + instant video", "Dedicated growth strategist"],
  },
];

const services = [
  { title: "Q3 Omnichannel Launch Brief", type: "Full campaign", status: "In progress", progress: 78, updated: "2 hours ago", icon: Layers3, accent: "lime" },
  { title: "Social Creative Batch #4", type: "Multi-format assets", status: "Completed", progress: 100, updated: "Yesterday", icon: Sparkles, accent: "blue" },
  { title: "AI Ad Copy Generator", type: "Automated service", status: "Ready to launch", progress: 0, updated: "3 days ago", icon: WandSparkles, accent: "orange" },
];

const creditBreakdown = [
  { label: "Copy generation", value: 4200, color: "bg-[#d1ff19]" },
  { label: "Image synthesis", value: 2850, color: "bg-[#9ee51d]" },
  { label: "Video rendering", value: 1400, color: "bg-[#5d9d25]" },
];

function formatCredits(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

export default function Home() {
  const [activePlan, setActivePlan] = useState<PlanId>("growth-pro");
  const [selectedPlan, setSelectedPlan] = useState<PlanId>("growth-pro");
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const plan = plans.find((item) => item.id === activePlan) ?? plans[0];
  const usedCredits = 8450;
  const remainingCredits = plan.capacity - usedCredits;
  const usagePercent = Math.round((usedCredits / plan.capacity) * 1000) / 10;
  const selectedPlanDetails = plans.find((item) => item.id === selectedPlan) ?? plans[0];

  const openPlanModal = () => {
    setSelectedPlan(activePlan);
    setIsPlanModalOpen(true);
    setSuccessMessage("");
  };

  const confirmPlanChange = () => {
    setActivePlan(selectedPlan);
    setIsPlanModalOpen(false);
    const message = `Plan successfully ${selectedPlan === "enterprise-scale" ? "upgraded" : "changed"} to ${selectedPlanDetails.name} for Northstar Labs!`;
    setSuccessMessage(message);
    toast.success(message);
  };

  return (
    <div className="edge-app min-h-screen bg-[#0b0d10] text-[#f3f4f6]" data-testid="edge-dashboard-page">
      <Toaster theme="dark" richColors />
      <header className="sticky top-0 z-30 border-b border-[#242933]/80 bg-[#0b0d10]/90 backdrop-blur-xl" data-testid="dashboard-header-nav">
        <div className="mx-auto flex max-w-360 items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-10">
            <a href="#overview" className="group flex items-center gap-3" data-testid="edge-brand-link">
              <span className="grid size-8 place-items-center rounded-[10px] bg-[#d1ff19] text-[#0b0d10] shadow-[0_0_24px_rgba(209,255,25,.18)] transition-transform duration-200 group-hover:rotate-6">
                <Zap className="size-4 fill-current" strokeWidth={2.5} />
              </span>
              <span>
                <span className="block font-heading text-lg font-black tracking-[-0.08em]">EDGE</span>
                <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6b7280]">AI marketing OS</span>
              </span>
            </a>
            <nav className="hidden items-center gap-7 text-sm font-medium text-[#8f96a3] lg:flex" aria-label="Primary navigation">
              <a href="#overview" className="nav-link-active" data-testid="overview-nav-link">Overview</a>
              <a href="#campaigns" className="nav-link" data-testid="campaigns-nav-link">Campaigns</a>
              <a href="#services" className="nav-link" data-testid="services-nav-link">AI services</a>
              <a href="#insights" className="nav-link" data-testid="analytics-nav-link">Analytics</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={openPlanModal} className="hidden rounded-lg bg-[#d1ff19] px-4 py-2.5 text-xs font-bold text-[#0b0d10] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e2ff70] sm:inline-flex" data-testid="manage-plan-header-button">
              Manage plan <ArrowUpRight className="ml-2 size-3.5" />
            </button>
            <button type="button" onClick={() => setIsMobileNavOpen((value) => !value)} className="grid size-10 place-items-center rounded-lg border border-[#242933] text-[#9ca3af] transition-colors hover:border-[#d1ff19] hover:text-[#d1ff19] lg:hidden" aria-label="Toggle navigation" data-testid="mobile-nav-toggle-button">
              <Menu className="size-5" />
            </button>
            <div className="hidden items-center gap-3 border-l border-[#242933] pl-4 sm:flex" data-testid="header-profile-badge">
              <div className="grid size-9 place-items-center rounded-full bg-[#d1ff19] font-heading text-sm font-bold text-[#0b0d10]">MC</div>
              <div className="hidden xl:block">
                <p className="text-xs font-semibold text-[#f3f4f6]">Maya Chen</p>
                <p className="mt-0.5 text-[10px] text-[#6b7280]">Northstar Labs</p>
              </div>
            </div>
          </div>
        </div>
        {isMobileNavOpen && (
          <div className="border-t border-[#242933] px-5 py-4 lg:hidden" data-testid="mobile-navigation-menu">
            <div className="grid gap-3 text-sm text-[#b4bac5]">
              <a href="#overview" onClick={() => setIsMobileNavOpen(false)} data-testid="mobile-overview-nav-link">Overview</a>
              <a href="#campaigns" onClick={() => setIsMobileNavOpen(false)} data-testid="mobile-campaigns-nav-link">Campaigns</a>
              <a href="#services" onClick={() => setIsMobileNavOpen(false)} data-testid="mobile-services-nav-link">AI services</a>
              <button type="button" className="flex items-center justify-between border-t border-[#242933] pt-3 text-left text-[#d1ff19]" onClick={openPlanModal} data-testid="mobile-manage-plan-button">Manage plan <ArrowUpRight className="size-4" /></button>
            </div>
          </div>
        )}
      </header>

      <main id="overview" className="mx-auto max-w-360 px-5 pb-16 pt-8 sm:px-8 sm:pt-12">
        <section className="mb-9 flex flex-col justify-between gap-6 md:flex-row md:items-end" data-testid="dashboard-intro-section">
          <div>
            <p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#d1ff19]" data-testid="dashboard-eyebrow"><span className="size-1.5 rounded-full bg-[#d1ff19] shadow-[0_0_8px_#d1ff19]" /> Monday, July 14, 2026</p>
            <h1 className="max-w-3xl font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.065em] text-[#f3f4f6] sm:text-5xl lg:text-6xl" data-testid="dashboard-heading">Good morning, Maya.<br /><span className="text-[#6b7280]">Let&apos;s make something move.</span></h1>
          </div>
          <div className="flex items-center gap-3 self-start md:self-end" data-testid="dashboard-help-actions">
            <button type="button" className="grid size-10 place-items-center rounded-full border border-[#242933] text-[#7e8795] transition-all duration-200 hover:border-[#d1ff19] hover:text-[#d1ff19]" aria-label="Open help" data-testid="help-button"><CircleHelp className="size-4" /></button>
            <button type="button" onClick={openPlanModal} className="inline-flex items-center rounded-full border border-[#3a414d] px-4 py-2.5 text-xs font-bold text-[#f3f4f6] transition-all duration-200 hover:border-[#d1ff19] hover:text-[#d1ff19] sm:hidden" data-testid="manage-plan-mobile-button">Manage plan <ArrowUpRight className="ml-2 size-3.5" /></button>
          </div>
        </section>

        {successMessage && (
          <div className="mb-6 flex items-center justify-between gap-4 rounded-xl border border-[#10b981]/35 bg-[#10b981]/10 px-4 py-3 text-sm text-[#b5f7d8]" role="status" data-testid="plan-update-success-message">
            <span className="flex items-center gap-2"><span className="grid size-5 place-items-center rounded-full bg-[#10b981] text-[#0b0d10]"><Check className="size-3.5" strokeWidth={3} /></span>{successMessage}</span>
            <button type="button" onClick={() => setSuccessMessage("")} className="text-[#7cd9ac] transition-colors hover:text-white" aria-label="Dismiss success message" data-testid="dismiss-success-message-button"><X className="size-4" /></button>
          </div>
        )}

        <section className="grid grid-cols-1 gap-5 lg:grid-cols-12" aria-label="Account and usage overview">
          <article className="edge-card relative overflow-hidden lg:col-span-5" data-testid="user-summary-card">
            <div className="absolute -right-20 -top-20 size-56 rounded-full bg-[#d1ff19]/4 blur-3xl" />
            <div className="relative flex items-start justify-between">
              <div><p className="section-kicker" data-testid="profile-card-kicker">Account &amp; plan overview</p><h2 className="mt-3 font-heading text-2xl font-bold tracking-[-0.045em]" data-testid="profile-card-title">Your workspace is<br /><span className="text-[#d1ff19]">ready to accelerate.</span></h2></div>
              <div className="grid size-12 place-items-center rounded-2xl border border-[#d1ff19]/30 bg-[#d1ff19]/10 font-heading text-lg font-bold text-[#d1ff19]" data-testid="profile-avatar">MC</div>
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-[#242933] pt-5" data-testid="profile-identity">
              <div><p className="text-sm font-bold text-[#f3f4f6]">Maya Chen</p><p className="mt-1 text-xs text-[#7f8794]">Head of Growth · Northstar Labs</p></div>
              <span className="ml-auto rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#63d99f]" data-testid="workspace-status">Active</span>
            </div>
            <div className="mt-5 flex items-end justify-between">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6b7280]">Current plan</p><p className="mt-2 font-heading text-xl font-bold" data-testid="current-plan-name">{plan.name}</p><p className="mt-1 text-xs text-[#7f8794]" data-testid="current-plan-price">{plan.price}/mo · Renews Aug 1, 2026</p></div>
              <button type="button" onClick={openPlanModal} className="inline-flex items-center text-xs font-bold text-[#d1ff19] transition-colors hover:text-[#efffa6]" data-testid="open-plan-modal-button">Upgrade plan <ArrowUpRight className="ml-1.5 size-3.5" /></button>
            </div>
          </article>

          <article className="edge-card lg:col-span-7" data-testid="usage-credits-card">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
              <div><p className="section-kicker" data-testid="credit-kicker">AI content credits</p><div className="mt-3 flex items-baseline gap-2"><span className="font-heading text-4xl font-extrabold tracking-[-0.06em]" data-testid="remaining-credits-value">{formatCredits(Math.max(remainingCredits, 0))}</span><span className="text-sm text-[#6b7280]">remaining</span></div><p className="mt-1 text-xs text-[#7f8794]" data-testid="credits-capacity-label">of {formatCredits(plan.capacity)} credits this month</p></div>
              <div className="rounded-xl border border-[#242933] bg-[#0b0d10]/70 px-3 py-2 text-right"><p className="text-[10px] font-bold uppercase tracking-wider text-[#6b7280]">Usage</p><p className="mt-1 font-heading text-xl font-bold text-[#d1ff19]" data-testid="usage-percent-value">{usagePercent}%</p></div>
            </div>
            <div className="mt-7" data-testid="credit-usage-progress-bar"><div className="mb-2 flex justify-between text-[10px] font-semibold uppercase tracking-wider text-[#6b7280]"><span>Monthly usage</span><span>{formatCredits(usedCredits)} used</span></div><div className="h-3 overflow-hidden rounded-full bg-[#242933]"><div className="h-full rounded-full bg-[#d1ff19] shadow-[0_0_18px_rgba(209,255,25,.3)] transition-all duration-500" style={{ width: `${Math.min(usagePercent, 100)}%` }} /></div></div>
            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-[#242933] pt-5" data-testid="credit-breakdown-list">{creditBreakdown.map((item) => <div key={item.label}><div className="mb-2 flex items-center gap-1.5"><span className={`size-1.5 rounded-full ${item.color}`} /><span className="truncate text-[10px] font-semibold text-[#7f8794]">{item.label}</span></div><p className="font-mono text-xs text-[#d4d7dc]">{formatCredits(item.value)}</p></div>)}</div>
          </article>
        </section>

        <section id="campaigns" className="mt-14" data-testid="next-action-section">
          <div className="mb-5 flex items-end justify-between"><div><p className="section-kicker">Recommended next action</p><h2 className="mt-2 font-heading text-2xl font-bold tracking-[-0.045em]" data-testid="next-action-title">Turn the launch brief into momentum.</h2></div><span className="hidden text-xs text-[#6b7280] sm:block" data-testid="next-action-meta">Based on your workspace activity</span></div>
          <div className="next-action-card" data-testid="next-action-card"><div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#d1ff19] text-[#0b0d10]"><FileText className="size-5" /></div><div className="min-w-0 flex-1"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d1ff19]">Q3 omnichannel launch brief</p><p className="mt-1 truncate text-sm font-semibold text-[#f3f4f6]">Your messaging framework is ready for final review.</p></div><button type="button" className="hidden items-center rounded-lg border border-[#57611f] px-4 py-2.5 text-xs font-bold text-[#d1ff19] transition-all hover:bg-[#d1ff19] hover:text-[#0b0d10] sm:inline-flex" data-testid="review-brief-button">Review brief <ArrowUpRight className="ml-2 size-3.5" /></button><button type="button" className="grid size-9 place-items-center rounded-lg border border-[#57611f] text-[#d1ff19] sm:hidden" aria-label="Review brief" data-testid="review-brief-mobile-button"><ChevronRight className="size-4" /></button></div>
        </section>

        <section id="services" className="mt-14" data-testid="recent-services-section">
          <div className="mb-5 flex items-end justify-between"><div><p className="section-kicker">Workspace pulse</p><h2 className="mt-2 font-heading text-2xl font-bold tracking-[-0.045em]" data-testid="services-heading">Active campaigns &amp; AI services</h2></div><button type="button" className="hidden items-center text-xs font-bold text-[#8f96a3] transition-colors hover:text-[#d1ff19] sm:inline-flex" data-testid="view-all-services-button">View all <ChevronRight className="ml-1 size-3.5" /></button></div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3" data-testid="recent-services-grid">{services.map((service) => { const Icon = service.icon; return <article key={service.title} className="edge-card group flex min-h-61.25 flex-col justify-between transition-transform duration-200 hover:-translate-y-1" data-testid="service-item-card"><div><div className="mb-7 flex items-start justify-between"><div className={`service-icon service-icon-${service.accent}`}><Icon className="size-5" /></div><span className={`status-pill ${service.status === "Completed" ? "status-complete" : service.status === "Ready to launch" ? "status-ready" : "status-progress"}`}>{service.status}</span></div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6b7280]">{service.type}</p><h3 className="mt-2 max-w-57.5 font-heading text-lg font-bold leading-tight tracking-[-0.035em] text-[#f3f4f6]">{service.title}</h3></div><div className="mt-7"><div className="mb-2 flex justify-between text-[10px] text-[#6b7280]"><span>Last updated {service.updated}</span><span className="font-mono text-[#b6bdc7]">{service.progress ? `${service.progress}%` : "—"}</span></div><div className="h-1 overflow-hidden rounded-full bg-[#242933]"><div className={`h-full rounded-full ${service.progress === 100 ? "bg-[#10b981]" : "bg-[#d1ff19]"}`} style={{ width: `${service.progress || 8}%` }} /></div></div></article> })}</div>
        </section>

        <section id="insights" className="mt-14 grid gap-5 md:grid-cols-2" data-testid="insights-section"><div className="edge-card flex items-center gap-4"><div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#242933] text-[#d1ff19]"><Gauge className="size-5" /></div><div><p className="text-sm font-bold">Creative velocity is up 24%</p><p className="mt-1 text-xs text-[#7f8794]">Your team shipped 18 more assets this month.</p></div><ArrowUpRight className="ml-auto size-4 text-[#d1ff19]" /></div><div className="edge-card flex items-center gap-4"><div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#242933] text-[#7cb3ff]"><BarChart3 className="size-5" /></div><div><p className="text-sm font-bold">2 new audience insights</p><p className="mt-1 text-xs text-[#7f8794]">Ready to sharpen your next brief.</p></div><ArrowUpRight className="ml-auto size-4 text-[#7cb3ff]" /></div></section>
      </main>

      {isPlanModalOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[#050608]/80 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="plan-modal-title" data-testid="plan-management-modal">
          <div className="modal-panel my-8 w-full max-w-3xl" data-testid="plan-modal-panel">
            <div className="flex items-start justify-between gap-4"><div><p className="section-kicker">Subscription settings</p><h2 id="plan-modal-title" className="mt-2 font-heading text-3xl font-extrabold tracking-[-0.055em]">Manage your plan.</h2><p className="mt-2 max-w-lg text-sm leading-relaxed text-[#8f96a3]">Select the plan that matches Northstar Labs&apos; next stage of growth.</p></div><button type="button" onClick={() => setIsPlanModalOpen(false)} className="grid size-9 shrink-0 place-items-center rounded-full border border-[#242933] text-[#7f8794] transition-colors hover:border-[#d1ff19] hover:text-[#d1ff19]" aria-label="Close plan modal" data-testid="close-plan-modal-button"><X className="size-4" /></button></div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">{plans.map((item) => { const isSelected = selectedPlan === item.id; return <button type="button" key={item.id} onClick={() => setSelectedPlan(item.id)} className={`plan-option ${isSelected ? "plan-option-selected" : ""}`} data-testid={`plan-option-${item.id}`} aria-pressed={isSelected}><div className="flex items-start justify-between gap-3 text-left"><div><p className="font-heading text-xl font-bold tracking-[-0.04em]">{item.name}</p><p className="mt-1 text-xs text-[#7f8794]">{item.description}</p></div><span className={`plan-badge ${item.id === "enterprise-scale" ? "plan-badge-lime" : ""}`}>{item.badge}</span></div><div className="mt-6 flex items-end gap-2 text-left"><span className="font-heading text-3xl font-extrabold tracking-[-0.06em]">{item.price}</span><span className="pb-1 text-xs text-[#7f8794]">{item.period}</span></div><p className="mt-1 text-left text-xs font-semibold text-[#d1ff19]">{item.credits}</p><ul className="mt-5 grid gap-2 border-t border-[#242933] pt-4 text-left text-xs text-[#aeb5bf]">{item.features.map((feature) => <li key={feature} className="flex items-center gap-2"><Check className="size-3.5 text-[#d1ff19]" />{feature}</li>)}</ul><span className={`plan-radio ${isSelected ? "plan-radio-selected" : ""}`}>{isSelected && <span />}</span></button> })}</div>
            <div className="mt-8 flex flex-col-reverse justify-between gap-3 border-t border-[#242933] pt-5 sm:flex-row sm:items-center"><p className="text-xs text-[#6b7280]">Changes take effect immediately in this demo.</p><div className="flex gap-3"><button type="button" onClick={() => setIsPlanModalOpen(false)} className="rounded-lg border border-[#303641] px-4 py-2.5 text-xs font-bold text-[#aeb5bf] transition-colors hover:border-[#677080] hover:text-[#f3f4f6]" data-testid="cancel-plan-change-button">Cancel</button><button type="button" onClick={confirmPlanChange} className="rounded-lg bg-[#d1ff19] px-5 py-2.5 text-xs font-bold text-[#0b0d10] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e2ff70]" data-testid="confirm-plan-change-button">Confirm {selectedPlan === activePlan ? "selection" : selectedPlan === "enterprise-scale" ? "upgrade" : "change"}</button></div></div>
          </div>
        </div>
      )}
    </div>
  );
}