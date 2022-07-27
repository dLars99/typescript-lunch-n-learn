import { castNumber, castBoolean, castString } from "./scripts/typecasting";
import { genericFunction } from "./scripts/generics";

castNumber();

// castBoolean();

// castString();

genericFunction<string>(5, "golden rings");
