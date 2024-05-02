function extractFormats(json: any) {
  let filters = {}

  const getChildren = (current) => {
    Object.values(current.children).forEach(child => {
      if (child.template === 'format-element') {
        filters[child.id] = {
          id: child.id,
          name: child.name,
          template: child.template
        }
      } else {
        getChildren(child)
      }
    })
  };

  getChildren(json)

  return filters
}