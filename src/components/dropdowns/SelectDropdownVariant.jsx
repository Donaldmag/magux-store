import {sizes, colors} from "../../data/data"

const SelectDropdownVariant = props => {
    const { data, name } = props;
    return (
      <div>
        <label htmlFor="item" className="flex flex-col mt-2 w-fit">
          <span className="text-xs font-medium text-gray-500 leading-5"> {name} </span>
          <select
            name="item"
            id="item"
            className="mt-0.5 px-1 h-8 sm:w-28 w-40 rounded-lg border border-zinc-400 md:shadow-sm text-xs"
          >
                <option disabled value="">Please select</option>
                {data.map(item => 
                    <option value={item.value} key={item.id}>{ item.value ? item.value : item.name}</option>
                )}
          </select>
        </label>
      </div>
    );
}

export default SelectDropdownVariant ;
