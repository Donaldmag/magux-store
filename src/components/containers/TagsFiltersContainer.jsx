
import { X } from "lucide-react";

const TagsFiltersContainer = (props) => {
    const { tag_name, type } = props;
    const removeFilter = () => {
        console.log("Filter removed");
    }

    return (
      <div className="flex flex-wrap items-center gap-3 min-h-8">
        {/* <span className="inline-flex items-center justify-center rounded-xl bg-blue-100 px-2.5 py-0.5 text-blue-700 dark:bg-blue-700 dark:text-blue-100">
          <p className="text-sm whitespace-nowrap">Euro</p>

          <button className="ms-1.5 -me-1 inline-block rounded-xl bg-blue-200 p-0.5 text-blue-700 transition hover:bg-blue-300 dark:bg-blue-800 dark:text-blue-100 dark:hover:bg-blue-900 hover:scale-[1.12] transition-all">
            <span className="sr-only">Remove badge</span>
            <X size={16} strokeWidth={2} className="cursor-pointer" />
          </button>
        </span> */}

        <span className="inline-flex items-center justify-center rounded-xl border border-zinc-500/25 px-2.5 py-0.5 min-h-8 text-zinc-500 dark:text-blue-100 bg-white">
          <p className="md:text-[0.85rem] font-medium whitespace-nowrap">
            {tag_name}
          </p>

          <button
            onClick={removeFilter()}
            className="ms-1.5 -me-1 inline-block rounded-xl bg-zinc-200 p-0.5 text-zinc-500 transition hover:bg-blue-200 dark:bg-blue-800 dark:text-blue-100 dark:hover:bg-blue-900 hover:scale-[1.12] transition-all"
          >
            <span className="sr-only">Remove badge</span>
            <X size={16} strokeWidth={2} className="cursor-pointer" />
          </button>
        </span>
      </div>
    );
}

export default TagsFiltersContainer