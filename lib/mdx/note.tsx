// import Info from '@components/icons/info'
// import styles from "./mdx-note.module.css";
export function MDXNote({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <aside {...props}>
      <div>
        <b>Note: </b>
        {children}
      </div>
    </aside>
  )
}
