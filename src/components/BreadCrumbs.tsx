import "../styles/components/BreadCrumbs.scss"

interface BreadCrumbProps {
    items: { to: string; label: string }[];
  }

export function BreadCrumbs({items}:BreadCrumbProps) {
    return(
        <div className="breadcrumbs">
        <nav className="nav">
        <ol>
          {items.map((item:any, index:number) => (
            <li key={index}>
              {index > 0 && <a> - </a>}
              {index < items.length - 1 ? (
                <a>{item.label}</a>
              ) : (
                <a>{item.label}</a>
              )}
            </li>
          ))}
        </ol>
      </nav>
      </div>
    )
}