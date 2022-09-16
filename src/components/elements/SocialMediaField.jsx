import React, { useState } from 'react';
import formStyleClasses from 'styles/forms';
import { v4 as uuidv4 } from 'uuid';

function SocialMediaFieldInput ({ socialMediaLink, onChange, onRemove }) {
  const [link, setLink] = useState(socialMediaLink);

  function handleKeyPress(e) {
    if (e.key === 'Enter' && link.type !== '') {
      e.preventDefault();
      onChange(link);
    }
  }

  function removeItem() {
    onRemove(link);
  }

  // function handleSocialMediaChange(e) {
  //   const newLink = { ...link, type: e.target.value };
  //   setLink(newLink);
  //   onChange(newLink);
  // }

  return (
    <div className="mb-2 grid grid-cols-7 gap-2 md:grid-cols-6">
      {/* <select
        name="type"
        className={`${formStyleClasses.input} h-10 col-span-3 md:col-span-2`}
        onChange={handleSocialMediaChange}
        value={link.type}
      >
        <option>Select</option>
        <option value="twitter">Twitter</option>
        <option value="linkedin">LinkedIn</option>
        <option value="facebook">Facebook</option>
      </select> */}

      <input
        type="text"
        id="socialMediaLink"
        name="socialMediaLink"
        value={link.url}
        onChange={(e) => setLink({ ...link, url: e.target.value })}
        onKeyPress={handleKeyPress}
        onBlur={() => onChange(link)}
        className={`${formStyleClasses.input} col-span-3 h-10 md:col-span-3`}
      />

      <button className="hidden dark:text-white md:block" type="button" onClick={removeItem}>Remove</button>
      <button className="dark:text-white md:hidden" type="button" onClick={removeItem}>X</button>
    </div>
  )
}

function SocialMediaField({ value, onChange }) {
  const existingLinks = value.map(link => {
    return { ...link, id: link.id || uuidv4() };
  });

  const [socialMediaLinks, setLinks] = useState(existingLinks);

  function addLink() {
    socialMediaLinks.push({
      url: '',
      type: '',
      id: uuidv4(),
    });

    setLinks([...socialMediaLinks]);
  }

  function updateLink(newLink) {
    const baseList = socialMediaLinks.filter(link => newLink.id !== link.id);
    const newLinks = [...baseList, newLink];
    setLinks(newLinks);
    onChange('socialMediaLinks', newLinks);
  }

  function removeLink(linkToRemove) {
    const newLinks = socialMediaLinks.filter(link => linkToRemove.id !== link.id);
    setLinks([...newLinks]);
    onChange('socialMediaLinks', newLinks);
  }

  const links = Array.from(socialMediaLinks);

  return (
    <div className="mb-6">
      <div className="mb-2">
        <label htmlFor="speakers">Social Media</label>
        <button className="float-right dark:text-white" type="button" onClick={addLink}>
          Add Social Media Link
        </button>
      </div>

      <div>
        {links.map(link => {
          return (
            <SocialMediaFieldInput
              key={link.id}
              socialMediaLink={link}
              socialMediaLinks={socialMediaLinks}
              onChange={updateLink}
              onRemove={removeLink}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SocialMediaField;
