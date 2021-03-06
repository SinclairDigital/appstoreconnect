import { AppType, BetaGroupType, BetaTesterType, BuildType } from '../../..'
import { API, DELETE, GET, POST } from '../../../../api'
import { AppsResponse } from '../apps/types'
import { BetaGroupsResponse } from '../beta-groups/types'
import { BuildsResponse } from '../builds/types'
import {
    BetaTesterAppsLinkagesRequest,
    BetaTesterAppsLinkagesResponse,
    BetaTesterBetaGroupsLinkagesRequest,
    BetaTesterBetaGroupsLinkagesResponse,
    BetaTesterBuildsLinkagesRequest,
    BetaTesterBuildsLinkagesResponse,
    BetaTesterCreateRequest,
    BetaTesterResponse,
    BetaTestersResponse,
} from './types'

/**
 * Create a beta tester assigned to a group, a build, or an app.
 * @param body
 */
export function createBetaTester(
    api: API,
    body: BetaTesterCreateRequest
): Promise<BetaTesterResponse> {
    return POST(api, `/betaTesters`, { body })
}

/**
 * Remove a beta tester's ability to test all apps.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export function deleteBetaTester(api: API, id: string): Promise<void> {
    return DELETE(api, `/betaTesters/${id}`)
}

/**
 * Find and list beta testers for all apps, builds, and beta groups.
 * @param query
 */
export function listBetaTesters(
    api: API,
    query: ListBetaTestersQuery
): Promise<BetaTestersResponse> {
    return GET(api, `/betaTesters`, { query })
}

/**
 * Get a specific beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function readBetaTesterInformation(
    api: API,
    id: string,
    query: ReadBetaTesterInformationQuery
): Promise<BetaTesterResponse> {
    return GET(api, `/betaTesters/${id}`, { query })
}

/**
 * Add one or more beta testers to a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export function addBetaTesterToBetaGroups(
    api: API,
    id: string,
    body: BetaTesterBetaGroupsLinkagesRequest
): Promise<void> {
    return POST(api, `/betaTesters/${id}/relationships/betaGroups`, { body })
}

/**
 * Remove a specific beta tester from one or more beta groups, revoking their access to test builds associated with those groups.
 */
export function removeBetaTesterFromBetaGroups(
    api: API,
    id: string,
    body: BetaTesterBetaGroupsLinkagesRequest
): Promise<void> {
    return DELETE(api, `/betaTesters/${id}/relationships/betaGroups`, { body })
}

/**
 * Individually assign a beta tester to a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export function individuallyAssignBetaTesterToBuilds(
    api: API,
    id: string,
    body: BetaTesterBuildsLinkagesRequest
): Promise<void> {
    return POST(api, `/betaTesters/${id}/relationships/builds`, { body })
}

/**
 * Remove an individually assigned beta tester's ability to test a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export function individuallyUnassignBetaTesterFromBuilds(
    api: API,
    id: string,
    body: BetaTesterBuildsLinkagesRequest
): Promise<void> {
    return DELETE(api, `/betaTesters/${id}/relationships/builds`, { body })
}

/**
 * Remove a specific beta tester's access to test any builds of one or more apps.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export function removeBetaTesterAccessToApps(
    api: API,
    id: string,
    body: BetaTesterAppsLinkagesRequest
): Promise<void> {
    return DELETE(api, `/betaTesters/${id}/relationships/apps`, { body })
}

/**
 * Get a list of apps that a beta tester can test.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function listAllAppsForBetaTester(
    api: API,
    id: string,
    query: ListAllAppsForBetaTesterQuery
): Promise<AppsResponse> {
    return GET(api, `/betaTesters/${id}/apps`, { query })
}

/**
 * Get a list of app resource IDs associated with a beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function getAllAppResourceIDsForBetaTester(
    api: API,
    id: string,
    query: GetAllAppResourceIDsForBetaTesterQuery
): Promise<BetaTesterAppsLinkagesResponse> {
    return GET(api, `/betaTesters/${id}/relationships/apps`, { query })
}

/**
 * Get a list of builds individually assigned to a specific beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function listAllBuildsIndividuallyAssignedToBetaTester(
    api: API,
    id: string,
    query: ListAllBuildsIndividuallyAssignedToBetaTesterQuery
): Promise<BuildsResponse> {
    return GET(api, `/betaTesters/${id}/builds`, { query })
}

/**
 * Get a list of build resource IDs individually assigned to a specific beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function getAllIDsForBuildsIndividuallyAssignedToBetaTester(
    api: API,
    id: string,
    query: GetAllIDsForBuildsIndividuallyAssignedToBetaTesterQuery
): Promise<BetaTesterBuildsLinkagesResponse> {
    return GET(api, `/betaTesters/${id}/relationships/builds`, { query })
}

/**
 * Get a list of beta groups that contain a specific beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function listAllBetaGroupsForBetaTester(
    api: API,
    id: string,
    query: ListAllBetaGroupsForBetaTesterQuery
): Promise<BetaGroupsResponse> {
    return GET(api, `/betaTesters/${id}/betaGroups`, { query })
}

/**
 * Get a list of group resource IDs associated with a beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export function getAllBetaGroupIDsForBetaTesterGroups(
    api: API,
    id: string,
    query: GetAllBetaGroupIDsForBetaTesterGroupsQuery
): Promise<BetaTesterBetaGroupsLinkagesResponse> {
    return GET(api, `/betaTesters/${id}/relationships/betaGroups`, { query })
}

interface ListBetaTestersQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
        /**
         * Fields to return for included related types.
         */
        betaGroups?: BetaGroupType[]
        /**
         * Fields to return for included related types.
         */
        betaTesters?: BetaTesterType[]
        /**
         * Fields to return for included related types.
         */
        builds?: BuildType[]
    }
    filter?: {
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        apps?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        betaGroups?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        builds?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        email?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        firstName?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        inviteType?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        lastName?: string[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: ('apps' | 'betaGroups' | 'builds')[]
    /**
     * Number of resources to return.
     */
    // limit?: number
    limit?: {
        /**
         * Number of included related resources to return.
         */
        apps?: number
        /**
         * Number of included related resources to return.
         */
        betaGroups?: number
        /**
         * Number of included related resources to return.
         */
        builds?: number
    }
    sort?: (
        | 'email'
        | '+email'
        | '-email'
        | 'firstName'
        | '+firstName'
        | '-firstName'
        | 'inviteType'
        | '+inviteType'
        | '-inviteType'
        | 'lastName'
        | '+lastName'
        | '-lastName')[]
}

interface ReadBetaTesterInformationQuery {
    fields?: {
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        apps?: AppType[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        betaGroups?: BetaGroupType[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        betaTesters?: BetaTesterType[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        builds?: BuildType[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: ('apps' | 'betaGroups' | 'builds')[]
    limit?: {
        /**
         * Number of included related resources to return.
         */
        builds?: number
        /**
         * Number of included related resources to return.
         */
        betaGroups?: number
        /**
         * Number of included related resources to return.
         */
        apps?: number
    }
}

interface ListAllAppsForBetaTesterQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
    }
    /**
     * Number of resources to return.
     */
    limit?: number
}

interface GetAllAppResourceIDsForBetaTesterQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
}

interface ListAllBuildsIndividuallyAssignedToBetaTesterQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        builds?: BuildType[]
    }
    /**
     * Number of resources to return.
     */
    limit?: number
}

interface GetAllIDsForBuildsIndividuallyAssignedToBetaTesterQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
}

interface ListAllBetaGroupsForBetaTesterQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        betaGroups?: BetaGroupType[]
    }
    /**
     * Number of resources to return.
     */
    limit?: number
}

interface GetAllBetaGroupIDsForBetaTesterGroupsQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
}
