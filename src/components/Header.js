import { Link, useLocation } from "react-router-dom";

function Header() {
  // Define the location of the current page so we can use it in the return statement.
  const location = useLocation();
  // Create a variable that will be used to display the current page after my name.
  const currentPage = <div className="flex items-center mt-1 opacity-40"> {location.pathname}</div>;
  return (
    <div className="p-[3vw]">
      <div className="flex flex-wrap justify-between gap-2">
        <div className="flex items-center gap-2">
          <Link to="/">
            {/* We don't import this SVG with react components because we need to place tailwinds css on individual tags within the svg */}
          <svg className="w-20" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="m165 577.68v502.32c0 3.9766 1.582 7.793 4.3945 10.605s6.6289 4.3945 10.605 4.3945h840c3.9766 0 7.793-1.582 10.605-4.3945s4.3945-6.6289 4.3945-10.605v-504c49.824-31.371 87.34-78.93 106.24-134.69 18.902-55.762 18.039-116.33-2.4453-171.53-20.484-55.199-59.336-101.67-110.04-131.61-50.699-29.934-110.16-41.512-168.39-32.789-58.227 8.7266-111.68 37.223-151.38 80.703-39.699 43.48-63.227 99.297-66.633 158.08h-84.84c-3.7305-58.719-27.531-114.37-67.414-157.63-39.883-43.258-93.422-71.496-151.64-79.977-58.223-8.4805-117.59 3.3047-168.16 33.391-50.566 30.082-89.254 76.633-109.59 131.85-20.328 55.215-21.059 115.74-2.0742 171.43s56.535 103.16 106.36 134.46zm136.68-444c60.094 0 117.72 23.859 160.23 66.336 42.508 42.477 66.406 100.09 66.449 160.18 0.042969 60.094-23.777 117.74-66.223 160.28-42.445 42.535-100.05 66.477-160.14 66.562-60.094 0.085938-117.76-23.695-160.32-66.109-42.566-42.418-66.547-100-66.676-160.09 0.0625-60.102 23.965-117.72 66.465-160.21 42.496-42.5 100.12-66.402 160.21-66.465zm340.68 240c3.7344 65.395 32.316 126.89 79.895 171.91 47.582 45.016 110.57 70.145 176.07 70.254 36.879-0.16406 73.281-8.3555 106.68-24v293.16h-810v-291c33.398 15.645 69.801 23.836 106.68 24 65.789-0.12891 129.02-25.492 176.66-70.855 47.641-45.367 76.066-107.28 79.418-172.98zm482.64-15c0 60.121-23.883 117.78-66.395 160.29-42.508 42.508-100.17 66.391-160.29 66.391-60.121 0-117.78-23.883-160.29-66.391-42.508-42.512-66.391-100.17-66.391-160.29 0-60.117 23.883-117.78 66.391-160.29 42.512-42.512 100.17-66.395 160.29-66.395 39.832 0.042969 78.953 10.57 113.43 30.52 34.477 19.953 63.094 48.633 82.973 83.148s30.324 73.66 30.281 113.49zm-120 705.84h-49.68v-80.52c0-3.9766-1.582-7.793-4.3945-10.605s-6.6289-4.3945-10.605-4.3945h-12v-54h77.039zm-104.4 0v-66h24.719v66zm-312.6 0.48047v-66h24v66zm-312.96 0v-66h24.961v66zm468.96-66h24.719v66h-24.719zm-312.96 0h24.961v66h-24.84zm-236.16-84h77.039v54h-12 0.003906c-4.0234-0.0625-7.8984 1.4883-10.766 4.3086-2.8633 2.8203-4.4766 6.6719-4.4766 10.691v81h-49.68zm120 54h-12v-54h125.64v54h-12c-4.0391-0.097656-7.9492 1.4414-10.84 4.2656-2.8906 2.8203-4.5195 6.6914-4.5195 10.734v81h-72v-81c0-3.9375-1.5469-7.7148-4.3086-10.523-2.7617-2.8047-6.5156-4.4141-10.453-4.4766zm156 0h-12v-54h126.12v54h-12c-4.0391-0.097656-7.9492 1.4414-10.84 4.2656-2.8906 2.8203-4.5195 6.6914-4.5195 10.734v81h-72v-81c0-3.9375-1.5469-7.7148-4.3086-10.523-2.7617-2.8047-6.5156-4.4141-10.453-4.4766zm156 0h-12v-54h126.6v54h-12c-4.0391-0.097656-7.9492 1.4414-10.84 4.2656-2.8906 2.8203-4.5234 6.6914-4.5195 10.734v81h-72v-81c0-3.9375-1.5469-7.7148-4.3086-10.523-2.7617-2.8047-6.5156-4.4141-10.453-4.4766zm156 0h-12v-54h127.08v54h-12c-4.043-0.097656-7.9492 1.4414-10.84 4.2656-2.8945 2.8203-4.5234 6.6914-4.5195 10.734v81h-72v-81c0-3.9375-1.5469-7.7148-4.3086-10.523-2.7617-2.8047-6.5156-4.4141-10.453-4.4766z" />
                <g className="animate-wiggle">
                  <path d="m207.84 360.84c0 24.887 9.8867 48.758 27.484 66.355 17.598 17.598 41.469 27.484 66.355 27.484 24.887 0 48.758-9.8867 66.355-27.484 17.598-17.598 27.484-41.469 27.484-66.355 0-24.887-9.8867-48.758-27.484-66.355s-41.469-27.484-66.355-27.484c-24.879 0.03125-48.727 9.9297-66.32 27.52-17.59 17.594-27.488 41.441-27.52 66.32zm93.84-63.84c16.934 0 33.168 6.7266 45.141 18.699 11.973 11.973 18.699 28.211 18.699 45.141 0 16.93-6.7266 33.168-18.699 45.141-11.973 11.973-28.207 18.699-45.141 18.699-16.93 0-33.168-6.7266-45.141-18.699-11.973-11.973-18.699-28.211-18.699-45.141 0-16.93 6.7266-33.168 18.699-45.141 11.973-11.973 28.211-18.699 45.141-18.699z" />
                  <path d="m301.68 246.84c3.9805 0 7.793-1.582 10.605-4.3945 2.8164-2.8125 4.3945-6.6289 4.3945-10.605v-52.68c0-5.3594-2.8594-10.312-7.5-12.992-4.6406-2.6797-10.359-2.6797-15 0-4.6406 2.6797-7.5 7.6328-7.5 12.992v52.68c0 3.9766 1.582 7.793 4.3945 10.605s6.6289 4.3945 10.605 4.3945z" />
                  <path d="m461.76 448.08-44.039-28.922-0.003906 0.003906c-3.2695-2.7734-7.5703-4.0195-11.816-3.4141-4.2461 0.60156-8.0312 2.9961-10.398 6.5703-2.3672 3.5781-3.0898 7.9961-1.9844 12.141 1.1016 4.1445 3.9297 7.6172 7.7617 9.543l44.039 28.922c2.4844 1.5469 5.3516 2.3789 8.2812 2.3984 4.3008-0.046874 8.375-1.9375 11.188-5.1953 2.8164-3.2539 4.0938-7.5625 3.5156-11.824-0.58203-4.2656-2.9648-8.0742-6.543-10.461z" />
                  <path d="m137.28 468.84c2.8086 4.207 7.5391 6.7305 12.598 6.7188 2.8906-0.035156 5.7148-0.86328 8.1602-2.3984l44.039-29.16c3.4531-2.125 5.8945-5.5547 6.7773-9.5078 0.88281-3.957 0.125-8.0977-2.0938-11.488-2.2227-3.3867-5.7227-5.7344-9.6992-6.5039s-8.0977 0.10547-11.422 2.4219l-44.039 29.156c-3.3516 2.1602-5.6953 5.5742-6.5078 9.4766-0.8125 3.9023-0.023438 7.9688 2.1875 11.285z" />
                  <path d="m804 359.16c0 24.887 9.8867 48.758 27.484 66.355s41.469 27.484 66.355 27.484c24.887 0 48.758-9.8867 66.355-27.484 17.598-17.598 27.484-41.469 27.484-66.355 0-24.887-9.8867-48.758-27.484-66.355-17.598-17.598-41.469-27.484-66.355-27.484-24.879 0.03125-48.727 9.9297-66.32 27.52-17.59 17.594-27.488 41.441-27.52 66.32zm157.68 0c0 16.93-6.7266 33.168-18.699 45.141-11.973 11.973-28.211 18.699-45.141 18.699-16.93 0-33.168-6.7266-45.141-18.699-11.973-11.973-18.699-28.211-18.699-45.141 0-16.93 6.7266-33.168 18.699-45.141 11.973-11.973 28.211-18.699 45.141-18.699 17.004-0.097656 33.348 6.582 45.418 18.562 12.07 11.98 18.871 28.273 18.902 45.277z" />
                  <path d="m898.32 245.16c3.9766 0 7.793-1.582 10.605-4.3945s4.3945-6.6289 4.3945-10.605v-52.68c0-5.3594-2.8594-10.312-7.5-12.992-4.6406-2.6797-10.359-2.6797-15 0-4.6406 2.6797-7.5 7.6328-7.5 12.992v52.68c0 3.9766 1.5781 7.793 4.3945 10.605 2.8125 2.8125 6.625 4.3945 10.605 4.3945z" />
                  <path d="m1014.4 417.36c-3.3359-2.1445-7.3789-2.8984-11.262-2.0898-3.8867 0.80859-7.2969 3.1094-9.4961 6.4102-2.1797 3.3281-2.9492 7.3828-2.1367 11.273 0.80859 3.8945 3.1289 7.3047 6.457 9.4883l44.039 28.922v-0.003906c2.4102 1.625 5.25 2.5039 8.1602 2.5195 4.3633 0.042969 8.5273-1.8164 11.406-5.0938 2.8828-3.2773 4.1914-7.6484 3.5938-11.969-0.60156-4.3242-3.0547-8.168-6.7227-10.535z" />
                  <path d="m782.28 417.36-44.039 28.922h-0.003907c-3.332 2.2031-5.6562 5.6367-6.4648 9.5469-0.80859 3.9141-0.039063 7.9883 2.1484 11.332 2.1758 3.332 5.5977 5.6484 9.5 6.4375 3.9023 0.78906 7.957-0.015625 11.258-2.2383l44.039-28.922v0.003906c4.3164-3.0078 6.7422-8.0508 6.3945-13.301-0.34766-5.2461-3.418-9.9258-8.0898-12.336-4.6719-2.4141-10.266-2.2031-14.742 0.55469z" />
                </g>
                <path  d="m423 618.72v202.56c0 3.9766 1.582 7.793 4.3945 10.605s6.6289 4.3945 10.605 4.3945h324c3.9766 0 7.793-1.582 10.605-4.3945s4.3945-6.6289 4.3945-10.605v-202.56c0-3.9766-1.582-7.793-4.3945-10.605s-6.6289-4.3945-10.605-4.3945h-324c-3.9766 0-7.793 1.582-10.605 4.3945s-4.3945 6.6289-4.3945 10.605zm324 187.56-294 0.003906v-172.56h294z" />
                <path d="m530.4 768.96c12.988 0 25.441-5.1602 34.621-14.34 9.1836-9.1836 14.34-21.637 14.34-34.621s-5.1562-25.438-14.34-34.621c-9.1797-9.1797-21.633-14.34-34.621-14.34-12.984 0-25.438 5.1602-34.617 14.34-9.1836 9.1836-14.34 21.637-14.34 34.621s5.1562 25.438 14.34 34.621c9.1797 9.1797 21.633 14.34 34.617 14.34zm0-67.922c5.0312 0 9.8516 2 13.41 5.5547 3.5547 3.5547 5.5508 8.3789 5.5508 13.406s-1.9961 9.8516-5.5508 13.406c-3.5586 3.5547-8.3789 5.5547-13.41 5.5547-5.0273 0-9.8477-2-13.406-5.5547-3.5547-3.5547-5.5508-8.3789-5.5508-13.406s1.9961-9.8516 5.5508-13.406c3.5586-3.5547 8.3789-5.5547 13.406-5.5547z" />
                <path d="m669.6 768.96c12.984 0 25.438-5.1602 34.617-14.34 9.1836-9.1836 14.34-21.637 14.34-34.621s-5.1562-25.438-14.34-34.621c-9.1797-9.1797-21.633-14.34-34.617-14.34-12.988 0-25.441 5.1602-34.621 14.34-9.1836 9.1836-14.34 21.637-14.34 34.621s5.1562 25.438 14.34 34.621c9.1797 9.1797 21.633 14.34 34.621 14.34zm0-67.922c5.0273 0 9.8477 2 13.406 5.5547 3.5547 3.5547 5.5508 8.3789 5.5508 13.406s-1.9961 9.8516-5.5508 13.406c-3.5586 3.5547-8.3789 5.5547-13.406 5.5547-5.0312 0-9.8516-2-13.41-5.5547-3.5547-3.5547-5.5508-8.3789-5.5508-13.406s1.9961-9.8516 5.5508-13.406c3.5586-3.5547 8.3789-5.5547 13.41-5.5547z" />
              </g>
            </svg>
          </Link>
          <Link to="/">
            <h1 className="lowercase relative top-px">
              Cadien <span className="font-semibold">Lake</span> Jack Henry James
            </h1>
          </Link>
          {/* If we are on the homepage, display nothing, otherwise display the curent page after my name */}
          {location.pathname === "/" ? "" : currentPage}
        </div>
        {/* If we aren't on the home page, display nothing, otherwise display additional info about me */}
        <div className="flex items-center pl-[10vw] opacity-60">{location.pathname !== "/" ? "" : <h1 className="lowercase relative top-px justify-self-end">Songwriter, Producer, Graphic Designer & Web Developer</h1>}</div>
      </div>
    </div>
  );
}

export default Header;
