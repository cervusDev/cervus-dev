interface ITooltip {
  message: string;
  content: any;
}

function TooltipIconWrapper({ content, message }: ITooltip) {
  return (
    <div className="relative group">
      {content}
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-500 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {message}
      </span>
    </div>
  );
}

export default TooltipIconWrapper;