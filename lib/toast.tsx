import { toast } from "sonner";
import { CustomToast } from "@/components/ToastCard";

export const notify = {
  success: (title: string, description?: string) => {
    toast.custom((t) => (
      <CustomToast
        t={t}
        type="success"
        title={title}
        description={description}
      />
    ));
  },
  error: (title: string, description?: string) => {
    toast.custom((t) => (
      <CustomToast t={t} type="error" title={title} description={description} />
    ));
  },
  loading: (title: string, description?: string) => {
    toast.custom((t) => (
      <CustomToast
        t={t}
        type="loading"
        title={title}
        description={description}
      />
    ));
  },
  info: (title: string, description?: string) => {
    toast.custom((t) => (
      <CustomToast t={t} type="info" title={title} description={description} />
    ));
  },
  dismissAll: () => toast.dismiss(),
};
