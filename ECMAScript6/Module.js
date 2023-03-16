// duoc dung de import cac module khac vao module hien tai
// import: nap vao module hien tai
// export: xuat ra module khac
// phai su dung type="module" trong the script
import logger, { TYPE_ERROR, TYPE_LOG, TYPE_WARN } from "./loggerModule.js";

logger("Hello World", TYPE_ERROR);
logger("Hello World", TYPE_WARN);
logger("Hello World", TYPE_LOG);