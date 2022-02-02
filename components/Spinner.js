const Spinner =
  'data:image/gif;base64,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';

export default Spinner;
