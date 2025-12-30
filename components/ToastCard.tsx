import { toast } from "sonner";

type ToastType = "success" | "error" | "loading" | "info";

interface CustomToastProps {
  t: string | number;
  title: string;
  description?: string;
  type: ToastType;
}

export function CustomToast({ t, title, description, type }: CustomToastProps) {
  const icons = {
    success: (
      <svg
        fill="#1B438F"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M15.2928932,8.29289322 L10,13.5857864 L8.70710678,12.2928932 C8.31658249,11.9023689 7.68341751,11.9023689 7.29289322,12.2928932 C6.90236893,12.6834175 6.90236893,13.3165825 7.29289322,13.7071068 L9.29289322,15.7071068 C9.68341751,16.0976311 10.3165825,16.0976311 10.7071068,15.7071068 L16.7071068,9.70710678 C17.0976311,9.31658249 17.0976311,8.68341751 16.7071068,8.29289322 C16.3165825,7.90236893 15.6834175,7.90236893 15.2928932,8.29289322 Z"
        />
      </svg>
    ),
    error: (
      <svg
        className="h-6 w-6 text-[#1B438F]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    info: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="#1B438F" strokeWidth="1.5" />
        <path
          d="M12 17V11"
          stroke="#1B438F"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="1"
          cy="1"
          r="1"
          transform="matrix(1 0 0 -1 11 9)"
          fill="#1B438F"
        />
      </svg>
    ),
    loading: (
      <svg
        className="h-6 w-6 animate-spin text-[#1B438F]"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>
    ),
  };

  return (
    <div className="font-montserrat group relative flex w-full min-w-[280px] items-start gap-4 overflow-hidden rounded-md border border-slate-200 bg-white p-4 shadow-sm shadow-[#1B438F4D]">
      {/* Icon */}
      <div className="flex-shrink-0 text-center">{icons[type]}</div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h3 className="text-sm leading-5 font-bold text-[#1B438F]">{title}</h3>
        {description && (
          <p className="mt-1 text-xs leading-4 font-medium text-slate-500">
            {description}
          </p>
        )}
      </div>

      {/* Close Button */}
      <div className="-mt-1 ml-2 flex-shrink-0">
        <button
          onClick={() => toast.dismiss(t)}
          className="rounded-full p-1 transition-colors hover:bg-slate-50"
        >
          <svg
            className="h-4 w-4 text-[#1B438F]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#1B438F]/5"></div>
    </div>
  );
}
