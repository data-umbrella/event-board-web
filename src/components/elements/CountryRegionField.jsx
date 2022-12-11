import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useFormikContext, useField } from 'formik';
import formStyleClasses from 'styles/forms';

// NOTE: 

function CountryRegionField ({ ...props }) {
  const { setFieldValue } = useFormikContext();
  const [countryField] = useField({ ...props, name: 'country' });
  const [regionField] = useField({ ...props, name: 'region' });

  return (
    <div className="grid grid-cols-2 gap-2">
      <CountryDropdown
        className="block w-full"
        classes={formStyleClasses.select}
        value={countryField.value || ''}
        onChange={(val) => setFieldValue('country', val)}
      />
      <RegionDropdown
        className="block w-full"
        country={countryField.value}
        value={regionField.value}
        classes={formStyleClasses.select || ''}
        onChange={(val) => setFieldValue('region', val)}
      />
    </div>
  );
}

export default CountryRegionField;
