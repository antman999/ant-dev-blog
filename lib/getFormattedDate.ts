export default function getFormattedDate(dateString: string): string{
    return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(new Date(dateString));
}