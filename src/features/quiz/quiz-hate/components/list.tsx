import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
} from '@/shared/ui/checkbox';

export const List = () => {
  return (
    <ul>
      <li>
        <Checkbox>
          <CheckboxLabel>Learn CSS flex</CheckboxLabel>
          <CheckboxIndicator />
        </Checkbox>
      </li>
    </ul>
  );
};
