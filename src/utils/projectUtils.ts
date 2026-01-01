export const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return '#4CAF50';
    case 'in-progress':
      return '#FF9800';
    default:
      return '#757575';
  }
};

export const formatDate = (dateString: string) => {
  // Parse "MMM YYYY" or "MMMM YYYY" format (e.g., "Aug 2025", "July 2020")
  // Adding day 1 ensures consistent cross-browser parsing
  const date = new Date(`${dateString} 1`);
  
  if (isNaN(date.getTime())) {
    // If parsing fails, return the original string as fallback
    return dateString;
  }
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  });
};
