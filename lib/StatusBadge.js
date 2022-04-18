export function StatusBadge({ published, draft }) {
  if (!published && !draft) return
  
  return {
    label: draft ? 'Draft' : 'Published',
		title: 'Document Status',
    color: draft ? 'caution' : 'success'
  }
} 