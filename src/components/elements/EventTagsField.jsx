import React, { useState } from 'react';
import formStyleClasses from 'styles/forms';
import CreatableSelect from 'react-select/creatable';
import useDarkMode from 'hooks/dark-mode';

// function TagPillbox({ tag, onChange, onRemove }) {
//   const [text, setText] = useState(tag);
//   const [editing, setEditing] = useState(tag === "");

//   function handleKeyPress(e) {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       setEditing(false);
//       onChange(text);
//     }
//   }

//   function removeItem() {
//     onRemove(text);
//   }

//   if (editing) {
//     return (
//       <input
//         type="text"
//         id="tag"
//         name="tag"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         onKeyPress={handleKeyPress}
//         className={`${formStyleClasses.input} h-10`}
//       />
//     );
//   } else {
//     return (
//       <div className="bg-purple-500 rounded p-2">
//         <div className="inline-block col-span-2 text-left text-white font-light gap-2">
//           {text}
//         </div>
//         <button
//           className="col-span-1 float-right text-white text-sm font-semibold"
//           type="button"
//           onClick={removeItem}
//         >
//           &#10006;
//         </button>
//       </div>
//     );
//   }
// }


function EventTagsField({ value = [], onChange }) {
  const [colorTheme] = useDarkMode();
  const [tags, setTags] = useState(value.map((item) => ({ value: item, label: item })));

  const controlStyles = {
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  }

  console.log(value)

  return (
    <CreatableSelect
      isMulti
      className={formStyleClasses.input}
      placeholder="#hashtag"
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          ...controlStyles,
        }),
        input: provided => ({
          ...provided,
          color: colorTheme === 'light' ? 'white' : '#545454',
        })
      }}
      defaultValue={tags}

      onCreateOption={(newOption) => {
        const newValue = [...tags, newOption];
        onChange([...newValue.map((item) => item).join('')]);
        setTags([...newValue.map((item) => item).join('')]);
      }}
      onChange={(selectedOptions) => {
        onChange(selectedOptions.map((item) => item.value).join(''));

      }}
    />
  );
}

export default EventTagsField;
