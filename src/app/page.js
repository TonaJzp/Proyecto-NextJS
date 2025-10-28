import Link from "next/link";
import AutoCarousel from "@/components/AutoCarousel";
import RadialProgress from "@/components/RadialProgress";
import Breadcrumbs from "@/components/Breadcrumbs";
import Diff from "@/components/Diff";
import Header from "next/head";
import MyDatePicker from "@/components/MyDatePicker";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeSelect from "@/components/ThemeSelect";
import Card from "@/components/Card";
import Fab from "@/components/Fab";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section>

      <AutoCarousel />

      <br />
      <div className="tooltip" data-tip="hello world">
        <p className="btn">Hover me</p>
      </div>

      <RadialProgress />


      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input type="radio" name="my_tabs" className="tab" aria-label="Tab 1" />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p>Tab content 1</p>

          <details className="dropdown">
            <summary className="btn m-1">open or close</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </details>
        </div>

        <input type="radio" name="my_tabs" className="tab" aria-label="Tab 2" />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p>Tab content 2</p>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">Click</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div>

        <input type="radio" name="my_tabs" className="tab" aria-label="Tab 3" defaultChecked />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p>Tab content 3</p>

          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-error">Error</button>
          <br />
          <button className="btn btn-soft">Default</button>
          <button className="btn btn-soft btn-primary">Primary</button>
          <button className="btn btn-soft btn-secondary">Secondary</button>
          <button className="btn btn-soft btn-accent">Accent</button>
          <button className="btn btn-soft btn-info">Info</button>
          <button className="btn btn-soft btn-success">Success</button>
          <button className="btn btn-soft btn-warning">Warning</button>
          <button className="btn btn-soft btn-error">Error</button>
          <br />
          <button className="btn btn-outline">Default</button>
          <button className="btn btn-outline btn-primary">Primary</button>
          <button className="btn btn-outline btn-secondary">Secondary</button>
          <button className="btn btn-outline btn-accent">Accent</button>
          <button className="btn btn-outline btn-info">Info</button>
          <button className="btn btn-outline btn-success">Success</button>
          <button className="btn btn-outline btn-warning">Warning</button>
          <button className="btn btn-outline btn-error">Error</button>

        </div>
      </div>

      <div className="p-10 bg-white"></div>

    </section>
  );
}
