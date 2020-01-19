import { run } from "./app/app.js";
import { NavService } from "./app/utils/nav-service";
import { HeaderService } from "./app/utils/header-service.js";

import "./style/style.scss";

const navService = new NavService();
const headerService = new HeaderService();

run(navService, headerService);
