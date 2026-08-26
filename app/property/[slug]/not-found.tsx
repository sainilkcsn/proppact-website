import { EmptyState } from "@/components/ui/EmptyState";

export default function PropertyNotFoundPage() {
  return (
    <EmptyState
      title="Property not found"
      description="This listing may have been moved or is no longer available. Browse categories to continue your search."
      actionLabel="View Residential Properties"
      actionHref="/residential-properties"
    />
  );
}
