ARG BASE_IMAGE

FROM $BASE_IMAGE AS base

FROM nginx

COPY --from=base /source/build /usr/share/nginx/html/