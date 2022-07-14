ARG BASE_IMAGE

FROM $BASE_IMAGE AS base

FROM nginx

COPY --from=base /build/build /usr/share/nginx/html/