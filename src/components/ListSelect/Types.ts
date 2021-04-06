interface Option {
  id: string;
  label: string;
}

interface OptionInternal extends Option {
  checked: boolean;
}

interface ListChangeEvent {
  id: string,
  checked: boolean
}

export {
  Option,
  OptionInternal,
  ListChangeEvent
}