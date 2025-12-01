import { getCv } from "@/lib/getCv";
import EditCvForm from "@/components/EditCvForm";

export default async function ModifierPage() {
  const cv = await getCv();

  return <EditCvForm cv={cv} />;
}
