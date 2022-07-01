import { buildApiUrl } from './common/buildUrl'
import { MunroSummaryDto } from './models/Munro'
import { httpClient } from './common'
import { AppResponseCollection } from './common/types'

export async function GetMunros (): Promise<
  AppResponseCollection<MunroSummaryDto>
> {
  const url = buildApiUrl('api/munro')
  const response = (await httpClient.getRequest<MunroSummaryDto>(
    url
  )) as AppResponseCollection<MunroSummaryDto>

  return response
}
