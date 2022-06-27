import { buildApiUrl } from "./common/buildUrl"
import { MunroSummaryDto } from "./models/Munro";
import {httpClient} from './common';
import { AppResponse } from "./common/types";

export async function GetMunros() : Promise<AppResponse<MunroSummaryDto>> {
    const url = buildApiUrl("api/munro");
    const response = await httpClient.getRequest<MunroSummaryDto>(url)

    return response;
}