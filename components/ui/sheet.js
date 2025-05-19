import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const Sheet = ({ open, onOpenChange, children }) => {
  return (
    <div className={`fixed inset-0 z-50 ${open ? 'block' : 'hidden'}`}>
      {open && <div className="fixed inset-0 bg-black/20" onClick={() => onOpenChange(false)} />}
      {children}
    </div>
  );
};

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b",
        bottom: "inset-x-0 bottom-0 border-t",
        left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => {
  return (
    <div 
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
    </div>
  );
});
SheetContent.displayName = "SheetContent";

const SheetTrigger = ({ asChild, children, onClick, ...props }) => {
  if (asChild && children) {
    return React.cloneElement(children, { 
      onClick: (e) => {
        if (onClick) onClick(e);
        if (children.props && children.props.onClick) children.props.onClick(e);
      }, 
      ...props 
    });
  }
  
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
};

const SheetClose = ({ asChild, children, onClick, ...props }) => {
  if (asChild && children) {
    return React.cloneElement(children, { 
      onClick: (e) => {
        if (onClick) onClick(e);
        if (children.props && children.props.onClick) children.props.onClick(e);
      }, 
      ...props 
    });
  }
  
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export { Sheet, SheetContent, SheetTrigger, SheetClose };