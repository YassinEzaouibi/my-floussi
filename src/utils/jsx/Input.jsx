import React, { memo } from 'react'
import {
    Input,
    initTE,
} from "tw-elements";

initTE({ Input });
const FormInput = ({FormLabel}) => {
  return (
    <div class="relative mb-3" data-te-input-wrapper-init>
                    <input
                        type="text"
                        class="peer text-white   w-full block min-h-[auto]  rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-1 transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0  "
                        id="age"
                        placeholder="Example label" />
                    <label
                        for="age"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary   "
                    >{FormLabel}
                    </label>
                </div>
  )
}

export default memo(FormInput)