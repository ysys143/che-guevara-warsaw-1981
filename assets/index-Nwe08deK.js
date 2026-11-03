const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./tex-CMD4e85i.js","./rolldown-runtime-DK3Fl9T5.js"])))=>i.map(i=>d[i]);
import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{$n as t,A as n,An as r,At as i,B as a,Bn as o,C as s,Cn as c,Ct as l,D as u,Dt as d,E as f,Et as p,F as m,G as h,Gn as g,H as _,Hn as v,I as y,In as b,J as x,Jn as S,K as C,Kn as w,L as T,Ln as E,M as D,Mn as O,Mt as k,N as A,Nn as j,O as M,On as ee,Ot as N,P as te,Pn as ne,Pt as re,Q as ie,Qn as ae,R as P,Rn as oe,Rt as se,S as ce,Sn as le,St as ue,Tt as F,U as de,Un as fe,V as pe,Vn as me,W as he,Wn as ge,X as _e,Xn as ve,Y as ye,Z as be,Zn as xe,_ as Se,_n as Ce,_r as we,_t as Te,a as Ee,ar as De,at as Oe,bn as ke,bt as Ae,c as je,cr as Me,ct as Ne,d as Pe,dr as I,dt as Fe,er as L,et as R,f as z,fr as Ie,ft as B,gn as Le,gr as Re,gt as V,h as ze,hn as Be,hr as Ve,ht as H,i as He,ir as Ue,j as U,jn as We,jt as Ge,k as Ke,kn as qe,kt as Je,l as Ye,lr as Xe,lt as Ze,m as Qe,mr as $e,mt as et,n as tt,nr as nt,nt as rt,o as it,or as at,ot,p as st,pr as ct,pt as W,q as lt,r as ut,rr as dt,rt as ft,s as pt,sr as mt,st as ht,t as gt,tr as G,tt as _t,u as vt,ur as yt,ut as bt,v as xt,vn as St,vt as Ct,w as wt,wt as Tt,x as Et,xn as Dt,xt as Ot,y as kt,yt as At,z as jt,zn as Mt,zt as Nt}from"./tex-CMD4e85i.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function Pt(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ft(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var K={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},q={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new W}},envmap:{envMap:{value:null},envMapRotation:{value:new W},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new W}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new W}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new W},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new W},normalScale:{value:new L(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new W},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new W}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new W}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new W}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0},uvTransform:{value:new W}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new L(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}}},It={basic:{uniforms:$e([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:$e([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:$e([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:$e([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:$e([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new U(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:$e([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:$e([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:$e([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:$e([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:$e([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:$e([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new W},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new W}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distance:{uniforms:$e([q.common,q.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distance_vert,fragmentShader:K.distance_frag},shadow:{uniforms:$e([q.lights,q.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};It.physical={uniforms:$e([It.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new W},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new W},clearcoatNormalScale:{value:new L(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new W},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new W},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new W},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new W},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new W},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new W},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new W},transmissionSamplerSize:{value:new L},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new W},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new W},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new W},anisotropyVector:{value:new L},anisotropyMap:{value:null},anisotropyMapTransform:{value:new W}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var Lt={r:0,b:0,g:0},Rt=new et,zt=new W;zt.set(-1,0,0,0,1,0,0,0,1);function Bt(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new H(new ce(1,1,1),new We({name:`BackgroundCubeMaterial`,uniforms:at(It.backgroundCube.uniforms),vertexShader:It.backgroundCube.vertexShader,fragmentShader:It.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Rt.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zt),l.material.toneMapped=D.getTransfer(i.colorSpace)!==qe,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new H(new N(2,2),new We({name:`BackgroundMaterial`,uniforms:at(It.background.uniforms),vertexShader:It.background.vertexShader,fragmentShader:It.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=D.getTransfer(i.colorSpace)!==qe,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Lt,Ie(e)),n.buffers.color.setClear(Lt.r,Lt.g,Lt.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Vt(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ht(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ut(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Re(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&Re(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&Re(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Wt(e){let t=this,n=null,r=0,i=!1,a=!1,o=new d,s=new W,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Gt=class extends Ue{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new m(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ce(5,5,5),i=new We({name:`CubemapFromEquirect`,uniforms:at(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new H(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=ht),new A(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Kt=256,qt=3,Jt=20,Yt=256,Xt=16,Zt=3,Qt=new G,$t=new U,en=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new A(1,10,null),this._boxMesh=new H(new ce(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Qt}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor($t));let h=new A(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Kt,yt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Kt:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=tn(e,!1,!1),n=Math.log2(e)-qt;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=tn(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=cn()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=sn()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=rn(),this._integrationMaterial=an());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Xt);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Zt)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Yt*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=on());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function tn(e,t,n){return new Gt(e,{minFilter:Ne,generateMipmaps:t,type:_t,colorSpace:bt,depthBuffer:n})}function nn(e,t,n){return new We({name:e,uniforms:t,vertexShader:K.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function rn(){return nn(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yt}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function an(){return nn(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xt}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function on(){return nn(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Jt}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function sn(){return nn(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function cn(){return nn(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ln(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Gt(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new en(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new en(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function un(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&we(`WebGLRenderer: `+e+` extension not supported.`),t}}}function dn(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?ge:fe)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function fn(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function pn(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Xe(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function mn(e,t,n){let r=new WeakMap,i=new nt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new P(h,p,m,u);g.type=x,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new L(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function hn(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var gn={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function _n(e,t,n,r,i,a){let o=new Ue(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new wt;u.setAttribute(`position`,new lt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new lt([0,2,0,0,2,0],2));let d=new Ce({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new H(u,d),p=new F(-1,1,1,-1,0,1),m=null,h=null,g=!1,v,y=null,b=[],x=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,x=b.length>0&&b[0].isRenderPass===!0;let t=o.width,n=o.height;b.length>0&&s===null&&(s=new Ue(t,n,{type:_t,depthBuffer:!1,stencilBuffer:!1}),c=new Ue(t,n,{type:_t,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&b.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new _(t,n),a===!0&&(l.format=pe,l.type=S)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<b.length;e++){let i=b[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&b.length===0)return!1;if(y=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return x===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(e,t){e.toneMapping=v,g=!0;let n=o,r=s;for(let i=0;i<b.length;i++){let a=b[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},D.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=gn[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(y),e.render(f,p),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var vn=new Mt,yn=new _(1,1),bn=new te(1),xn=new P,Sn=new T,Cn=new m,wn=[],Tn=[],En=new Float32Array(16),Dn=new Float32Array(9),On=new Float32Array(4);function kn(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=wn[i];if(a===void 0&&(a=new Float32Array(i),wn[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function An(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function jn(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Mn(e,t){let n=Tn[t];n===void 0&&(n=new Int32Array(t),Tn[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Nn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Pn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;e.uniform2fv(this.addr,t),jn(n,t)}}function Fn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(An(n,t))return;e.uniform3fv(this.addr,t),jn(n,t)}}function In(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;e.uniform4fv(this.addr,t),jn(n,t)}}function Ln(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(An(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),jn(n,t)}else{if(An(n,r))return;On.set(r),e.uniformMatrix2fv(this.addr,!1,On),jn(n,r)}}function Rn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(An(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),jn(n,t)}else{if(An(n,r))return;Dn.set(r),e.uniformMatrix3fv(this.addr,!1,Dn),jn(n,r)}}function zn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(An(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),jn(n,t)}else{if(An(n,r))return;En.set(r),e.uniformMatrix4fv(this.addr,!1,En),jn(n,r)}}function Bn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Vn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;e.uniform2iv(this.addr,t),jn(n,t)}}function Hn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;e.uniform3iv(this.addr,t),jn(n,t)}}function Un(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;e.uniform4iv(this.addr,t),jn(n,t)}}function Wn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Gn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;e.uniform2uiv(this.addr,t),jn(n,t)}}function Kn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;e.uniform3uiv(this.addr,t),jn(n,t)}}function qn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;e.uniform4uiv(this.addr,t),jn(n,t)}}function Jn(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Yn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Jn(yn):vn,n.setTexture2D(t||a,i)}function Xn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Sn,i)}function Zn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Jn(bn):Cn,n.setTextureCube(t||a,i)}function Qn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||xn,i)}function $n(e){switch(e){case 5126:return Nn;case 35664:return Pn;case 35665:return Fn;case 35666:return In;case 35674:return Ln;case 35675:return Rn;case 35676:return zn;case 5124:case 35670:return Bn;case 35667:case 35671:return Vn;case 35668:case 35672:return Hn;case 35669:case 35673:return Un;case 5125:return Wn;case 36294:return Gn;case 36295:return Kn;case 36296:return qn;case 35678:case 36198:case 36298:case 36306:case 35682:return Yn;case 35679:case 36299:case 36307:return Xn;case 35680:case 36300:case 36308:case 36293:return Zn;case 36289:case 36303:case 36311:case 36292:return Qn}}function er(e,t){e.uniform1fv(this.addr,t)}function tr(e,t){let n=kn(t,this.size,2);e.uniform2fv(this.addr,n)}function nr(e,t){let n=kn(t,this.size,3);e.uniform3fv(this.addr,n)}function rr(e,t){let n=kn(t,this.size,4);e.uniform4fv(this.addr,n)}function ir(e,t){let n=kn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ar(e,t){let n=kn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function or(e,t){let n=kn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function sr(e,t){e.uniform1iv(this.addr,t)}function cr(e,t){e.uniform2iv(this.addr,t)}function lr(e,t){e.uniform3iv(this.addr,t)}function ur(e,t){e.uniform4iv(this.addr,t)}function dr(e,t){e.uniform1uiv(this.addr,t)}function fr(e,t){e.uniform2uiv(this.addr,t)}function pr(e,t){e.uniform3uiv(this.addr,t)}function mr(e,t){e.uniform4uiv(this.addr,t)}function hr(e,t,n){let r=this.cache,i=t.length,a=Mn(n,i);An(r,a)||(e.uniform1iv(this.addr,a),jn(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Jn(yn):vn;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function gr(e,t,n){let r=this.cache,i=t.length,a=Mn(n,i);An(r,a)||(e.uniform1iv(this.addr,a),jn(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Sn,a[e])}function _r(e,t,n){let r=this.cache,i=t.length,a=Mn(n,i);An(r,a)||(e.uniform1iv(this.addr,a),jn(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Jn(bn):Cn;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function vr(e,t,n){let r=this.cache,i=t.length,a=Mn(n,i);An(r,a)||(e.uniform1iv(this.addr,a),jn(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||xn,a[e])}function yr(e){switch(e){case 5126:return er;case 35664:return tr;case 35665:return nr;case 35666:return rr;case 35674:return ir;case 35675:return ar;case 35676:return or;case 5124:case 35670:return sr;case 35667:case 35671:return cr;case 35668:case 35672:return lr;case 35669:case 35673:return ur;case 5125:return dr;case 36294:return fr;case 36295:return pr;case 36296:return mr;case 35678:case 36198:case 36298:case 36306:case 35682:return hr;case 35679:case 36299:case 36307:return gr;case 35680:case 36300:case 36308:case 36293:return _r;case 36289:case 36303:case 36311:case 36292:return vr}}var br=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$n(t.type)}},xr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yr(t.type)}},Sr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Cr=/(\w+)(\])?(\[|\.)?/g;function wr(e,t){e.seq.push(t),e.map[t.id]=t}function Tr(e,t,n){let r=e.name,i=r.length;for(Cr.lastIndex=0;;){let a=Cr.exec(r),o=Cr.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){wr(n,l===void 0?new br(s,e,t):new xr(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Sr(s),wr(n,e)),n=e}}}var Er=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Tr(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Dr(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Or=37297,kr=0;function Ar(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var jr=new W;function Mr(e){D._getMatrix(jr,D.workingColorSpace,e);let t=`mat3( ${jr.elements.map(e=>e.toFixed(4))} )`;switch(D.getTransfer(e)){case Fe:return[t,`LinearTransferOETF`];case qe:return[t,`sRGBTransferOETF`];default:return Re(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Nr(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ar(e.getShaderSource(t),r)}return i}function Pr(e,t){let n=Mr(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Fr={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ir(e,t){let n=Fr[t];return n===void 0?(Re(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Lr=new G;function Rr(){return D.getLuminanceCoefficients(Lr),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Lr.x.toFixed(4)}, ${Lr.y.toFixed(4)}, ${Lr.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function zr(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Hr).join(`
`)}function Br(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Vr(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Hr(e){return e!==``}function Ur(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Wr(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gr=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kr(e){return e.replace(Gr,qr)}function qr(e,t){let n=K[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Kr(n)}var Jr=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yr(e){return e.replace(Jr,Xr)}function Xr(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Zr(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Qr={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function $r(e){return Qr[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ei={302:`ENVMAP_MODE_REFRACTION`};function ti(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ei[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ni={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ri(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ni[e.combine]||`ENVMAP_BLENDING_NONE`}function ii(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=$r(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=ti(n),d=ri(n),f=zr(n),p=Br(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Hr).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Hr).join(`
`),g.length>0&&(g+=`
`)):(h=[Zr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Hr).join(`
`),g=[Zr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:Ir(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,K.colorspace_pars_fragment,Pr(`linearToOutputTexel`,n.outputColorSpace),Rr(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Hr).join(`
`)),o=Kr(o),o=Ur(o,n),o=Wr(o,n),s=Kr(s),s=Ur(s,n),s=Wr(s,n),o=Yr(o),s=Yr(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Dr(i,i.VERTEX_SHADER,v),x=Dr(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Nr(i,b,`vertex`),n=Nr(i,x,`fragment`);Xe(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Re(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Er(i,m),w=Vr(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Or)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kr++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var ai=0,oi=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new si(e),t.set(e,n)),n}},si=class{constructor(e){this.id=ai++,this.code=e,this.usedTimes=0}};function ci(e){return e===1030||e===37490||e===36285}function li(e,t,n,r,i,a){let o=new ot,s=new oi,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&Re(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,O,k,A;if(x){let e=It[x];E=e.vertexShader,O=e.fragmentShader}else{E=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),ee=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,te=!!i.map,ne=!!i.matcap,re=!!b,ie=re&&b.isPMREMTexture===!0,ae=!!i.aoMap,P=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,ue=!!i.metalnessMap,F=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.diffuseRoughness>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=de&&!!i.anisotropyMap,be=fe&&!!i.clearcoatMap,xe=fe&&!!i.clearcoatNormalMap,Se=fe&&!!i.clearcoatRoughnessMap,Ce=pe&&!!i.diffuseRoughnessMap,we=ge&&!!i.iridescenceMap,Te=ge&&!!i.iridescenceThicknessMap,Ee=_e&&!!i.sheenColorMap,De=_e&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ve&&!!i.transmissionMap,Me=ve&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,I=i.alphaTest>0,Fe=!!i.alphaHash,L=!!i.extensions,R=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(R=e.toneMapping);let z=ie?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Ie={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:ee,instancingColor:ee&&m.instanceColor!==null,instancingMorph:ee&&m.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:D.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:ne,envMap:re,envMapMode:re&&b.mapping,envMapPMREM:ie,envMapMaxLod:ie?z.length-1:null,envMapSize:ie?z[0].width:null,aoMap:ae,lightMap:P,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&ci(i.normalMap.format),metalnessMap:ue,roughnessMap:F,anisotropy:de,anisotropyMap:ye,clearcoat:fe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,diffuseRoughness:pe,diffuseRoughnessMap:Ce,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:_e,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ve,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:I,alphaHash:Fe,combine:i.combine,mapUv:te&&p(i.map.channel),aoMapUv:ae&&p(i.aoMap.channel),lightMapUv:P&&p(i.lightMap.channel),bumpMapUv:oe&&p(i.bumpMap.channel),normalMapUv:se&&p(i.normalMap.channel),displacementMapUv:ce&&p(i.displacementMap.channel),emissiveMapUv:le&&p(i.emissiveMap.channel),metalnessMapUv:ue&&p(i.metalnessMap.channel),roughnessMapUv:F&&p(i.roughnessMap.channel),anisotropyMapUv:ye&&p(i.anisotropyMap.channel),clearcoatMapUv:be&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ce&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:we&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&p(i.sheenRoughnessMap.channel),specularMapUv:Oe&&p(i.specularMap.channel),specularColorMapUv:ke&&p(i.specularColorMap.channel),specularIntensityMapUv:Ae&&p(i.specularIntensityMap.channel),transmissionMapUv:je&&p(i.transmissionMap.channel),thicknessMapUv:Me&&p(i.thicknessMap.channel),alphaMapUv:Pe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(se||de),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(te||Pe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:R,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&D.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&D.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:L&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(L&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=f[e.type],n;if(t){let e=It[t];n=g.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new ii(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ui(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function di(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function fi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function pi(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||di),r.length>1&&r.sort(t||fi),i.length>1&&i.sort(t||fi)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function mi(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new pi,e.set(t,[i])):n>=r.length?(i=new pi,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function hi(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new G,color:new U};break;case`SpotLight`:n={position:new G,direction:new G,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new G,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new G,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new G,halfWidth:new G,halfHeight:new G}}return e[t.id]=n,n}}}function gi(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var _i=0;function vi(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function yi(e){let t=new hi,n=gi(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new G);let i=new G,a=new et,o=new et;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(vi);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=_i++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function bi(e){let t=new yi(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function xi(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new bi(e),t.set(n,[a])):r>=i.length?(a=new bi(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Si=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ci=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wi=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Ti=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Ei=new et,Di=new G,Oi=new G;function ki(e,t,n){let r=new be,i=new L,o=new L,c=new nt,l=new Te,u=new Ct,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new L},radius:{value:4}},vertexShader:Si,fragmentShader:Ci}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new wt;g.setAttribute(`position`,new s(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new H(g,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let b=this.type;this.render=function(t,n,s){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||t.length===0)return;this.type===2&&(Re(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=b!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],d=u.shadow;if(d===void 0){Re(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();i.multiply(h),o.copy(d.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(o.x=Math.floor(f/h.x),i.x=o.x*h.x,d.mapSize.x=o.x),i.y>f&&(o.y=Math.floor(f/h.y),i.y=o.y*h.y,d.mapSize.y=o.y));let g=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=g,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(u.isPointLight){Re(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Ue(i.x,i.y,{format:Be,type:_t,minFilter:ht,magFilter:ht,generateMipmaps:!1}),d.map.texture.name=u.name+`.shadowMap`,d.map.depthTexture=new _(i.x,i.y,x),d.map.depthTexture.name=u.name+`.shadowMapDepth`,d.map.depthTexture.format=a,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ot,d.map.depthTexture.magFilter=Ot}else u.isPointLight?(d.map=new Gt(i.x),d.map.depthTexture=new te(i.x,ve)):(d.map=new Ue(i.x,i.y),d.map.depthTexture=new _(i.x,i.y,ve)),d.map.depthTexture.name=u.name+`.shadowMap`,d.map.depthTexture.format=a,this.type===1?(d.map.depthTexture.compareFunction=g?518:515,d.map.depthTexture.minFilter=ht,d.map.depthTexture.magFilter=ht):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ot,d.map.depthTexture.magFilter=Ot);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();u.isPointLight!==!0&&d.updateMatrices(u,s);let y=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<v;t++){let i=d.getCamera(t);if(u.isPointLight){let e=d.camera,n=d.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Di.setFromMatrixPosition(u.matrixWorld),e.position.copy(Di),Oi.copy(e.position),Oi.add(wi[t]),e.up.copy(Ti[t]),e.lookAt(Oi),e.updateMatrixWorld(),n.makeTranslation(-Di.x,-Di.y,-Di.z),Ei.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Ei,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),p.viewport(c)}r=d.getFrustum(t),w(n,s,i,u,y,this.type)}d.isPointLightShadow!==!0&&this.type===3&&S(d,s),d.needsUpdate=!1}b=this.type,y.needsUpdate=!1,e.setRenderTarget(l,u,d)};function S(n,r){let a=t.update(v);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new Ue(i.x,i.y,{format:Be,type:_t}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,v,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,v,null)}function C(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,T)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function w(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=C(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=C(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)w(l[e],i,a,o,s,c)}function T(e){e.target.removeEventListener(`dispose`,T);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ai(e,t){function n(){let t=!1,n=new nt,r=null,i=new nt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):F(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=le[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):F(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,N=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),ee=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(te)[1]),ee=N>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),P=new nt().fromArray(ie),oe=new nt().fromArray(ae);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),ue(e.CULL_FACE),ge(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function F(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(F(e.BLEND),g=!1);else if(g===!1&&(ue(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Xe(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Xe(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Xe(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Xe(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?F(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):F(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?F(e.CULL_FACE):(ue(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(ee&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):F(e.POLYGON_OFFSET_FILL)}function Se(t){t?ue(e.SCISSOR_TEST):F(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+M-1),ne!==t&&(e.activeTexture(t),ne=t)}function we(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+M-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function Te(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function Pe(){try{e.texImage2D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function I(){try{e.texImage3D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function L(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function R(t){P.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),P.copy(t))}function z(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Ie(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function B(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,P.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:F,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:Pe,texImage3D:I,pixelStorei:L,getParameter:Fe,updateUBOMapping:Ie,uniformBlockBinding:B,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:R,viewport:z,reset:Le}}function ji(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new L,d=new WeakMap,f=new Set,p,m=new WeakMap,h=new Set,g=new FinalizationRegistry(e=>h.delete(e)),_=!1;try{_=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function v(e,t){return _?new OffscreenCanvas(e,t):Me(`canvas`)}function y(e,t,n){let r=1,i=B(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);p===void 0&&(p=v(n,a));let o=t?v(n,a):p;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Re(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Re(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function b(e){return e.generateMipmaps}function x(t){e.generateMipmap(t)}function S(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function C(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];Re(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||Re(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Fe:D.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function w(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,Re(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function T(e,t){return b(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function E(e){let t=new WeakRef(e);r.get(e).__ref=t,h.add(t),g.register(e,t,t)}function O(e){let t=r.get(e).__ref;t!==void 0&&(h.delete(t),g.unregister(t))}function k(e){j(e.target)}function A(e){M(e.target)}function j(e){e.removeEventListener(`dispose`,k),O(e),N(e),e.isVideoTexture&&d.delete(e),e.isHTMLTexture&&f.delete(e)}function M(e){e.removeEventListener(`dispose`,A),O(e),ne(e)}function ee(){for(let e of h){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?M(t):j(t))}h.clear(),f.clear()}function N(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=m.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&te(e),Object.keys(i).length===0&&m.delete(n)}r.remove(e)}function te(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=m.get(i);delete a[n.__cacheKey],o.memory.textures--}function ne(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&j(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let re=0;function ie(){re=0}function ae(){return re}function P(e){re=e}function oe(){let e=re;return e>=i.maxTextures&&Re(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),re+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ce(t,i){let a=r.get(t);if(t.isVideoTexture&&z(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)Re(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)Re(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?be(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function F(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?be(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?xe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let fe={[Dt]:e.REPEAT,[Ke]:e.CLAMP_TO_EDGE,[Ae]:e.MIRRORED_REPEAT},me={[Ot]:e.NEAREST,[l]:e.NEAREST_MIPMAP_NEAREST,[ue]:e.NEAREST_MIPMAP_LINEAR,[ht]:e.LINEAR,[Ze]:e.LINEAR_MIPMAP_NEAREST,[Ne]:e.LINEAR_MIPMAP_LINEAR},he={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ge(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&Re(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,fe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,fe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,fe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,me[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,me[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,he[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function _e(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,k),E(n));let i=n.source,a=m.get(i);a===void 0&&(a={},m.set(i,a));let s=se(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&te(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ve(n.start,r.width,4),c=ve(t.start,r.width,4);n.start<=i+1&&a===c&&ve(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function be(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=_e(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=D.getPrimaries(D.workingColorSpace),r=o.colorSpace===``?null:D.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=y(o.image,!1,i.maxTextureSize);t=Ie(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=C(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ge(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,v=d.__version===void 0||l===!0,S=u.dataReady,E=T(o,t);if(o.isDepthTexture)m=w(o.format===pe,o.type),v&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&v&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(v&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),S&&ye(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(S){if(o.layerUpdates.size>0){let t=I(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else Re(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?S&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&v&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?Re(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?S&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),S){if(o.layerUpdates.size>0){let i=I(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(v&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),S&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(v){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),f.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of f)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&v){let t=B(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(v){let r=B(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}S&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);b(o)&&o.mipmapsAutoUpdate===!0&&x(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function xe(t,o,s){if(o.image.length!==6)return;let c=_e(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=D.getPrimaries(D.workingColorSpace),r=o.colorSpace===``?null:D.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=y(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Ie(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=C(o.internalFormat,g,_,o.normalized,o.colorSpace),S=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,O=l.dataReady,k=T(o,h);ge(e.TEXTURE_CUBE_MAP,o);let A;if(o.isDepthTexture){if(v=w(o.format===pe,o.type),E){if(S)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(f){S&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,k,v,h.width,h.height);for(let t=0;t<6;t++){A=m[t].mipmaps;for(let r=0;r<A.length;r++){let i=A[r];o.format===1023?S?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?Re(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):S?O&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(A=o.mipmaps,S&&E){A.length>0&&k++;let t=B(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,k,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){S?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<A.length;r++){let i=A[r].image[t].image;S?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{S?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<A.length;r++){let i=A[r];S?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}b(o)&&o.mipmapsAutoUpdate===!0&&x(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=C(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Pe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=w(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;R(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=C(o.internalFormat,c,l,o.normalized,o.colorSpace);R(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function we(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?de(i.depthTexture,0):ce(i.depthTexture,0);let u=c.__webglTexture,d=Pe(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)we(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?we(i.__webglFramebuffer[0],t,0):we(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ce(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ce(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,i){let a=r.get(t);n!==void 0&&Se(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Te(t)}function De(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,A),E(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&R(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=C(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ge(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Se(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);b(i)?x(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ge(c,a),Se(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),b(a)&&x(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ge(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Se(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);b(i)?x(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Te(t)}function Oe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(b(a)&&a.mipmapsAutoUpdate===!0){let t=S(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),x(t),n.unbindTexture()}}}let ke=[];function je(t){if(t.samples>0){if(R(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ke.length=0,ke.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&ke.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(i.maxSamples,e.samples)}function R(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function z(e){let t=o.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(D.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Re(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Xe(`WebGLTextures: Unsupported texture color space:`,n)),t}function B(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=oe,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=P,this.setTexture2D=ce,this.setTexture2DArray=le,this.setTexture3D=F,this.setTextureCube=de,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=R,this.dispose=ee}function Mi(e,t){function n(n,r=``){let i,a=D.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Ni=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pi=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fi=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new C(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new We({vertexShader:Ni,fragmentShader:Pi,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new H(new N(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ii=class extends h{constructor(e,t){super();let n=this,r=null,i=1,o=null,s=`local-floor`,c=1,l=null,u=null,d=null,f=null,m=null,h=null,g=typeof XRWebGLBinding<`u`,v=new Fi,y={},b=t.getContextAttributes(),x=null,T=null,E=[],D=[],O=new L,k=null,A=null,j=new p;j.viewport=new nt;let M=new p;M.viewport=new nt;let ee=[j,M],N=new Et,te=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=E[e];return t===void 0&&(t=new De,E[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=E[e];return t===void 0&&(t=new De,E[e]=t),t.getGripSpace()},this.getHand=function(e){let t=E[e];return t===void 0&&(t=new De,E[e]=t),t.getHandSpace()};function ie(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=E[t];n!==void 0&&(n.update(e.inputSource,e.frame,l||o),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,P);for(let e=0;e<E.length;e++){let t=D[e];t!==null&&(D[e]=null,E[e].disconnect(t))}te=null,ne=null,v.reset();for(let e in y)delete y[e];if(e.setRenderTarget(x),m=null,f=null,d=null,r=null,T=null,F.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&Re(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){s=e,n.isPresenting===!0&&Re(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(e){l=e},this.getBaseLayer=function(){return f===null?m:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,P),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,o=null,s=null;b.depth&&(s=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?pe:a,o=b.stencil?S:ve);let c={colorFormat:t.RGBA8,depthFormat:s,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(c),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Ue(f.textureWidth,f.textureHeight,{format:se,type:w,depthTexture:new _(f.textureWidth,f.textureHeight,o,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Ue(m.framebufferWidth,m.framebufferHeight,{format:se,type:w,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(s),F.setContext(r),F.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function P(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,E[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<E.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=E[r];i&&i.connect(n)}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;v.texture!==null&&(v.depthNear>0&&(t=v.depthNear),v.depthFar>0&&(n=v.depthFar)),N.near=M.near=j.near=t,N.far=M.far=j.far=n,(te!==N.near||ne!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),te=N.near,ne=N.far),N.layers.mask=e.layers.mask|6,j.layers.mask=N.layers.mask&-5,M.layers.mask=N.layers.mask&-3;let i=e.parent,a=N.cameras;oe(N,i);for(let e=0;e<a.length;e++)oe(a[e],i);N.projectionMatrix.copy(j.projectionMatrix),N.projectionMatrixInverse.copy(j.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),ce(e,N,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=re*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(f!==null||m!==null)return c},this.setFoveation=function(e){c=e,f!==null&&(f.fixedFoveation=e),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=e)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(N)},this.getCameraTexture=function(e){return y[e]};let le=null;function ue(t,i){if(u=i.getViewerPose(l||o),h=i,u!==null){let t=u.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(m!==null)a=m.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(T,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(T))}let o=ee[n];o===void 0&&(o=new p,o.layers.enable(n),o.viewport=new nt,ee[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&v.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=y[n];e||(e=new C,y[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<E.length;e++){let t=D[e],n=E[e];t!==null&&n!==void 0&&n.update(t,i,l||o)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let F=new Pt;F.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},Li=new et,Ri=new W;Ri.set(-1,0,0,0,1,0,0,0,1);function zi(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ie(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Li.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ri),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Bi(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?Re(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):Re(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Vi=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hi=null;function Ui(){return Hi===null&&(Hi=new jt(Vi,16,16,Be,_t),Hi.name=`DFG_LUT`,Hi.minFilter=ht,Hi.magFilter=ht,Hi.wrapS=Ke,Hi.wrapT=Ke,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}var Wi=class{constructor(e={}){let{canvas:n=mt(),context:r=null,depth:i=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u=`default`,failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=w}=e;this.isWebGLRenderer=!0;let m;if(r!==null){if(typeof WebGLRenderingContext<`u`&&r instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=r.getContextAttributes().alpha}else m=o;let h=p,g=new Set([Nt,Le,ke]),_=new Set([w,ve,t,S,xe,ae]),v=new Uint32Array(4),y=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},x=null,C=null,T=[],E=[],O=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,A=!1,j=null,M=null,N=null,te=null;this._outputColorSpace=ee;let ne=0,re=0,P=null,oe=-1,se=null,ce=new nt,le=new nt,ue=null,F=new U(0),de=0,fe=n.width,pe=n.height,me=1,he=null,ge=null,_e=new nt(0,0,fe,pe),ye=new nt(0,0,fe,pe),Se=!1,Ce=new be,we=new ie,Te=!1,Ee=!1,De=new et,Oe=new G,Ae=new nt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Pe(){return P===null?me:1}let I=r;function Fe(e,t){return n.getContext(e,t)}let L,R,z,Ie,B,V,ze,Be,H,He,We,Ge,Ke,qe,Je,Ye,Ze,Qe,$e,tt,rt,it,at;try{let e={alpha:!0,depth:i,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if(`setAttribute`in n&&n.setAttribute(`data-engine`,`three.js r187`),n.addEventListener(`webglcontextlost`,W,!1),n.addEventListener(`webglcontextrestored`,lt,!1),n.addEventListener(`webglcontextcreationerror`,ut,!1),I===null){let t=`webgl2`;if(I=Fe(t,e),I===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ot()}catch(e){throw n.removeEventListener(`webglcontextlost`,W,!1),n.removeEventListener(`webglcontextrestored`,lt,!1),n.removeEventListener(`webglcontextcreationerror`,ut,!1),Xe(`WebGLRenderer: `+e.message),e}function ot(){L=new un(I),L.init(),rt=new Mi(I,L),R=new Ut(I,L,e,rt),z=new Ai(I,L),R.reversedDepthBuffer&&f&&z.buffers.depth.setReversed(!0),M=I.createFramebuffer(),N=I.createFramebuffer(),te=I.createFramebuffer(),Ie=new pn(I),B=new ui,V=new ji(I,L,z,B,R,rt,Ie),ze=new ln(k),Be=new Ft(I),it=new Vt(I,Be),H=new dn(I,Be,Ie,it),He=new hn(I,H,Be,it,Ie),Qe=new mn(I,R,V),Je=new Wt(B),We=new li(k,ze,L,R,it,Je),Ge=new zi(k,B),Ke=new mi,qe=new xi(L),Ze=new Bt(k,ze,z,He,m,c),Ye=new ki(k,He,R),at=new Bi(I,Ie,R,z),$e=new Ht(I,L,Ie),tt=new fn(I,L,Ie),Ie.programs=We.programs,k.capabilities=R,k.extensions=L,k.properties=B,k.renderLists=Ke,k.shadowMap=Ye,k.state=z,k.info=Ie}h!==1009&&(O=new _n(h,n.width,n.height,s,i,a));let st=new Ii(k,I);this.xr=st,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=L.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=L.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(e){e!==void 0&&(me=e,this.setSize(fe,pe,!1))},this.getSize=function(e){return e.set(fe,pe)},this.setSize=function(e,t,r=!0){st.isPresenting?Re(`WebGLRenderer: Can't change size while VR device is presenting.`):(fe=e,pe=t,n.width=Math.floor(e*me),n.height=Math.floor(t*me),r===!0&&(n.style.width=e+`px`,n.style.height=t+`px`),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,e,t))},this.getDrawingBufferSize=function(e){return e.set(fe*me,pe*me).floor()},this.setDrawingBufferSize=function(e,t,r){fe=e,pe=t,me=r,n.width=Math.floor(e*r),n.height=Math.floor(t*r),this.setViewport(0,0,e,t)},this.setEffects=function(e){if(h===1009)Xe(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Re(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}O.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ce)},this.getViewport=function(e){return e.copy(_e)},this.setViewport=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),z.viewport(ce.copy(_e).multiplyScalar(Pe()).round())},this.getScissor=function(e){return e.copy(ye)},this.setScissor=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),z.scissor(le.copy(ye).multiplyScalar(Pe()).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(e){z.setScissorTest(Se=e)},this.setOpaqueSort=function(e){he=e},this.setTransparentSort=function(e){ge=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=g.has(t)}if(e){let e=P.texture.type,t=_.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(v[0]=i,v[1]=a,v[2]=o,v[3]=r,I.clearBufferuiv(I.COLOR,0,v)):(y[0]=i,y[1]=a,y[2]=o,y[3]=r,I.clearBufferiv(I.COLOR,0,y))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),j=e},this.dispose=function(){n.removeEventListener(`webglcontextlost`,W,!1),n.removeEventListener(`webglcontextrestored`,lt,!1),n.removeEventListener(`webglcontextcreationerror`,ut,!1),Ze.dispose(),Ke.dispose(),qe.dispose(),V.dispose(),B.dispose(),ze.dispose(),He.dispose(),H.dispose(),it.dispose(),at.dispose(),We.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,bt),st.removeEventListener(`sessionend`,xt),St.stop()};function W(e){e.preventDefault(),ct(`WebGLRenderer: Context Lost.`),A=!0}function lt(){ct(`WebGLRenderer: Context Restored.`),A=!1;let e=Ie.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;ot(),Ie.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function ut(e){Xe(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ft(e){let t=e.target;t.removeEventListener(`dispose`,ft),pt(t)}function pt(e){ht(e),B.remove(e)}function ht(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=K(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=H.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=Be.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(L.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){j!==null&&e.isNodeMaterial&&j.setObject(r,e),Te===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,kt(e,t,r),e.side=0,e.needsUpdate=!0,kt(e,t,r),e.side=2):kt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),j!==null&&j.renderStart(e,t,n),C=qe.get(n),C.init(t),E.push(C),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),C.setupLights(),j!==null&&j.updateLights(C.state.lightsArray),Ee=this.localClippingEnabled,Te=Je.init(this.clippingPlanes,Ee),Te===!0&&Je.setGlobalState(this.clippingPlanes,t),j!==null&&Ye.render(C.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),C=E.pop(),j!==null&&j.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=B.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}L.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let vt=null;function yt(e){vt&&vt(e)}function bt(){St.stop()}function xt(){St.start()}let St=new Pt;St.setAnimationLoop(yt),typeof self<`u`&&St.setContext(self),this.setAnimationLoop=function(e){vt=e,st.setAnimationLoop(e),e===null?St.stop():St.start()},st.addEventListener(`sessionstart`,bt),st.addEventListener(`sessionend`,xt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Xe(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(A===!0)return;j!==null&&j.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=O!==null&&(P===null||n)&&O.begin(k,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(k,e,t,P),C=qe.get(e,E.length),C.init(t),C.state.textureUnits=V.getTextureUnits(),E.push(C),De.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?we.setFromArrayCamera(t):Ce.setFromProjectionMatrix(De,dt,t.reversedDepth),Ee=this.localClippingEnabled,Te=Je.init(this.clippingPlanes,Ee),x=Ke.get(e,T.length),x.init(),T.push(x),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let e=k.xr.getDepthSensingMesh();e!==null&&Ct(e,t,-1/0,k.sortObjects)}Ct(e,t,0,k.sortObjects),x.finish(),j!==null&&j.updateLights(C.state.lightsArray),k.sortObjects===!0&&x.sort(he,ge),Me=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Me&&Ze.addToRenderList(x,e),this.info.autoReset===!0&&this.info.reset(),Te===!0&&Je.beginShadows();let i=C.state.shadowsArray;if(Ye.render(i,e,t),Te===!0&&Je.endShadows(),(r&&O.hasRenderPass())===!1){let n=x.opaque,r=x.transmissive;if(C.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Tt(n,r,e,a)}Me&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];wt(x,e,n,n.viewport)}}else r.length>0&&Tt(n,r,e,t),Me&&Ze.render(e),wt(x,e,t)}P!==null&&re===0&&(V.updateMultisampleRenderTarget(P),V.updateRenderTargetMipmap(P)),r&&O.end(k),e.isScene===!0&&e.onAfterRender(k,e,t),it.resetDefaultState(),oe=-1,se=null,E.pop(),E.length>0?(C=E[E.length-1],V.setTextureUnits(C.state.textureUnits),Te===!0&&Je.setGlobalState(k.clippingPlanes,C.state.camera)):C=null,T.pop(),x=T.length>0?T[T.length-1]:null,j!==null&&j.renderEnd()};function Ct(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)C.pushLight(e),e.castShadow&&C.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?we:Ce;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);let i=He.update(e),a=e.material;a.visible&&x.push(e,i,a,n,Ae.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?we:Ce;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(De)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&x.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&x.push(e,i,a,n,Ae.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ct(i[e],t,n,r)}function wt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;C.setupLightsView(n),Te===!0&&Je.setGlobalState(k.clippingPlanes,n),r&&z.viewport(ce.copy(r)),i.length>0&&Et(i,t,n),a.length>0&&Et(a,t,n),o.length>0&&Et(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[r.id]===void 0){let e=L.has(`EXT_color_buffer_half_float`)||L.has(`EXT_color_buffer_float`);C.state.transmissionRenderTarget[r.id]=new Ue(1,1,{generateMipmaps:!0,type:e?_t:w,minFilter:Ne,samples:Math.max(4,R.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:D.workingColorSpace})}let i=C.state.transmissionRenderTarget[r.id],o=r.viewport||ce;i.setSize(o.z*k.transmissionResolutionScale,o.w*k.transmissionResolutionScale);let s=k.getRenderTarget(),c=k.getActiveCubeFace(),l=k.getActiveMipmapLevel();k.setRenderTarget(i),k.getClearColor(F),de=k.getClearAlpha(),de<1&&k.setClearColor(16777215,.5),k.clear(),Me&&Ze.render(n);let u=k.toneMapping;k.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),C.setupLightsView(r),Te===!0&&Je.setGlobalState(k.clippingPlanes,r),Et(e,n,r),V.updateMultisampleRenderTarget(i),V.updateRenderTargetMipmap(i),L.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Dt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(i),V.updateRenderTargetMipmap(i))}k.setRenderTarget(s,c,l),k.setClearColor(F,de),d!==void 0&&(r.viewport=d),k.toneMapping=u}function Et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Dt(o,t,n,s,l,c)}}function Dt(e,t,n,r,i,a){j!==null&&i.isNodeMaterial&&j.setObject(e,i),e.onBeforeRender(k,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(k,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=2):k.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(k,t,n,r,i,a)}function Ot(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function kt(e,t,n){t.isScene!==!0&&(t=je);let r=B.get(e),i=C.state.lights,a=C.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,C.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ft),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Mt(e,s),d}else s.uniforms=We.getUniforms(e),j!==null&&e.isNodeMaterial&&j.build(e,n,s),e.onBeforeCompile(s,k),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Mt(e,s),r.needsLights=It(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Ot(C.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function At(e,t,n,r,i){let a=B.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=kt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function jt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Er.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Mt(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function K(e,t,n,r,i){t.isScene!==!0&&(t=je),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?k.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:D.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=k.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=B.get(r),y=C.state.lights;if(Te===!0&&(Ee===!0||e!==se)){let t=e===se&&r.id===oe;Je.setState(r,e,t)}let x=!1,S=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?x=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?x=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Ot(C.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(S=!0):x=!0:x=!0:(x=!0,v.__version=r.version);let w=v.currentProgram;(x===!0||S===!0)&&(w=S===!0?At(r,t,i,s,h):kt(r,t,i),j&&r.isNodeMaterial&&j.onUpdateProgram(r,w,v));let T=!1,E=!1,O=!1,A=w.getUniforms(),M=v.uniforms;if(z.useProgram(w.program)&&(T=!0,E=!0,O=!0),r.id!==oe&&(oe=r.id,E=!0),T||se!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(I,`projectionMatrix`,e.projectionMatrix),A.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(I,Oe.setFromMatrixPosition(e.matrixWorld)),R.logarithmicDepthBuffer&&A.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),se!==e&&(se=e,E=!0,O=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&A.setValue(I,`sunShadowMap`,y.state.sunShadowMap,V),y.state.directionalShadowMap.length>0&&A.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,V),y.state.spotShadowMap.length>0&&A.setValue(I,`spotShadowMap`,y.state.spotShadowMap,V),y.state.pointShadowMap.length>0&&A.setValue(I,`pointShadowMap`,y.state.pointShadowMap,V)),i.isSkinnedMesh){A.setOptional(I,i,`bindMatrix`),A.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(I,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(A.setOptional(I,i,`batchingTexture`),A.setValue(I,`batchingTexture`,i._matricesTexture,V),A.setOptional(I,i,`batchingIdTexture`),A.setValue(I,`batchingIdTexture`,i._indirectTexture,V),A.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(I,`batchingColorTexture`,i._colorsTexture,V));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Qe.update(i,n,w),(E||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(M.envMapIntensity.value=t.environmentIntensity),M.dfgLUT!==void 0&&(M.dfgLUT.value=Ui()),E){if(A.setValue(I,`toneMappingExposure`,k.toneMappingExposure),v.needsLights&&q(M,O),a&&r.fog===!0&&Ge.refreshFogUniforms(M,a),Ge.refreshMaterialUniforms(M,r,me,pe,C.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=b,t=0;for(let n of C.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;M.probesSH.value=e.textures,M.probesMin.value=e.min,M.probesMax.value=e.max,M.probesResolution.value=e.resolution}Er.upload(I,jt(v),M,V)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Er.upload(I,jt(v),M,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(I,`center`,i.center),A.setValue(I,`modelViewMatrix`,i.modelViewMatrix),A.setValue(I,`normalMatrix`,i.normalMatrix),A.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,w),at.bind(n,w)}}return w}function q(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function It(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ne=t,re=n;let r=null,i=!1,a=!1;if(e){let o=B.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest,z.viewport(ce),z.scissor(le),z.setScissorTest(ue),oe=-1;return}if(o.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(o.__hasExternalTextures)V.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&V.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest}else ce.copy(_e).multiplyScalar(me).floor(),le.copy(ye).multiplyScalar(me).floor(),ue=Se;if(n!==0&&(r=M),z.bindFramebuffer(I.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(ce),z.scissor(le),z.setScissorTest(ue),i){let r=B.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=B.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=B.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}oe=-1};function Lt(e){let t=B.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=R.textureFormatReadable(e.format),t.__typeReadable=R.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Xe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){z.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=Lt(o);if(u.__formatReadable===!1){Xe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Xe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=P===null?null:B.get(P).__webglFramebuffer;z.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=Lt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=P===null?null:B.get(P).__webglFramebuffer;z.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ve(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(V.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(V.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(V.setTexture2D(t,0),v=I.TEXTURE_2D),z.activeTexture(I.TEXTURE0),z.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(I.UNPACK_ROW_LENGTH),b=z.getParameter(I.UNPACK_IMAGE_HEIGHT),x=z.getParameter(I.UNPACK_SKIP_PIXELS),S=z.getParameter(I.UNPACK_SKIP_ROWS),C=z.getParameter(I.UNPACK_SKIP_IMAGES);z.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(I.UNPACK_SKIP_PIXELS,l),z.pixelStorei(I.UNPACK_SKIP_ROWS,u),z.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,I.DEPTH_BUFFER_BIT,I.NEAREST);z.bindFramebuffer(I.READ_FRAMEBUFFER,null),z.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(I.READ_FRAMEBUFFER,N),z.bindFramebuffer(I.DRAW_FRAMEBUFFER,te);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,I.COLOR_BUFFER_BIT,I.NEAREST);z.bindFramebuffer(I.READ_FRAMEBUFFER,null),z.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(I.UNPACK_ROW_LENGTH,y),z.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(I.UNPACK_SKIP_PIXELS,x),z.pixelStorei(I.UNPACK_SKIP_ROWS,S),z.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&I.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){ne=0,re=0,P=null,z.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return dt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=D._getDrawingBufferColorSpace(e),t.unpackColorSpace=D._getUnpackColorSpace()}},Gi=(e,t,n)=>{let r=document.createElement(e);return t&&(r.id=t),n.appendChild(r),r},Ki=`이 부분은 자료가 부족해 상상으로 채웠습니다`,qi=class{constructor(e){this.root=e,this.fadeEl=Gi(`div`,`fade`,e),this.dot=Gi(`div`,`dot`,e),this.finder=Gi(`div`,`finder`,e),this.finder.innerHTML=`<svg viewBox="0 0 1000 600" preserveAspectRatio="none"><g fill="none" stroke="#e9e4d6" stroke-width="1.3" opacity=".8"><path d="M60 110V60H150M850 60H940V110M940 490V540H850M150 540H60V490"/><path d="M500 262V238M500 362V338M462 300H438M562 300H538"/><circle cx="500" cy="300" r="4"/></g></svg><div class="read"></div>`,this.finderRead=this.finder.querySelector(`.read`),this.markLayer=Gi(`div`,`marks`,e),this.caption=Gi(`div`,`caption`,e),this.caption.setAttribute(`aria-live`,`polite`),this.sfxEl=Gi(`div`,`sfx`,e),this.hintEl=Gi(`div`,`hint`,e),this.hotEl=Gi(`div`,`hot`,e),this.imagineEl=Gi(`div`,`imagine`,e),this.imagineEl.textContent=Ki,this.statusEl=Gi(`div`,`status`,e),this.toolsEl=Gi(`div`,`tools`,e),this.panelEl=Gi(`div`,`panel`,e),this.chooserEl=Gi(`div`,`chooser`,e),this.titleEl=Gi(`div`,`title`,e),this.titleEl.style.display=`none`,this.roomEl=Gi(`div`,`room`,e),this.marks=[],this.gradesOn=!1,this.gradesAllowed=!0,this.mapHandler=null,this.btnGrades=this.tool(`근거 표시`,`G`,()=>this.toggleGrades()),this.btnPanel=this.tool(`원문`,`Q`,()=>this.togglePanel()),this.btnMap=this.tool(`M의 창`,`M`,()=>this.mapHandler&&this.mapHandler()),this.btnSound=this.tool(`소리`,``,()=>this.onSound&&this.onSound()),this.btnMap.style.display=`none`,this.toolsEl.style.display=`none`,this.panelItems=[],this.panelEl.innerHTML=`<button class="close">닫기</button><h3>이 장면의 원문 근거</h3><div class="body"></div><p style="font-size:12px;color:#a9a395;margin-top:2em">짧은 인용만 싣는다. 전문은 사용 권리를 확인하기 전까지 싣지 않는다.</p>`,this.panelEl.querySelector(`.close`).onclick=e=>{this.togglePanel(!1),e.currentTarget.blur()}}tool(e,t,n){let r=Gi(`button`,null,this.toolsEl);return r.textContent=t?`${e} ${t}`:e,r.onclick=e=>{e.stopPropagation(),n(),r.blur()},r}mapOn(e){this.mapHandler=e,this.btnMap.style.display=``,this.btnMap.disabled=!1}mapOff(){this.mapHandler=null,this.btnMap.disabled=!0}showTools(e){this.toolsEl.style.display=e?`flex`:`none`}fade(e,t=1.2){return this.fadeEl.style.setProperty(`--fade`,t+`s`),this.fadeEl.style.opacity=+!!e,new Promise(e=>setTimeout(e,t*1e3+30))}line(e,{ref:t=``,quote:n=!1}={}){let r=this.caption;r.classList.toggle(`quote`,!!n),r.innerHTML=`<span class="t"></span>`+(t?`<span class="ref">${t}</span>`:``),r.querySelector(`.t`).textContent=e,r.classList.add(`show`)}clearLine(){this.caption.classList.remove(`show`)}sfx(e,t=3.5){this.sfxEl.textContent=`[${e}]`,this.sfxEl.classList.add(`show`),clearTimeout(this._sfx),this._sfx=setTimeout(()=>this.sfxEl.classList.remove(`show`),t*1e3)}hint(e=``){this.hintEl.textContent=e}status(e=``){this.statusEl.textContent=e,this.statusEl.classList.toggle(`show`,!!e)}hot(e){this.hotEl.textContent=e||``,this.hotEl.classList.toggle(`show`,!!e)}imagine(e){this.imagineEl.classList.toggle(`show`,!!e)}viewfinder(e,t=``){this.finder.classList.toggle(`show`,!!e),this.finderRead.textContent=t}toggleGrades(e){this.gradesAllowed&&(this.gradesOn=e??!this.gradesOn,this.btnGrades.setAttribute(`aria-pressed`,this.gradesOn),this.renderMarks())}allowGrades(e){this.forceGrades||(this.gradesAllowed=e,this.btnGrades.disabled=!e,e||(this.gradesOn=!1,this.btnGrades.setAttribute(`aria-pressed`,!1)),this.renderMarks())}setMarks(e){this.marks=(e||[]).map(e=>({...e,pos:new G(...e.pos)})),this.renderMarks()}renderMarks(){this.markLayer.innerHTML=``;for(let e of this.marks)e.el=null;if(this.gradesOn)for(let e of this.marks){let t=document.createElement(`div`);t.className=`mark `+e.g,t.innerHTML=`<b>${e.g}</b><span></span>`,t.querySelector(`span`).textContent=e.t,this.markLayer.appendChild(t),e.el=t}}updateMarks(e,t,n){if(!this.gradesOn)return;let r=new G;for(let i of this.marks){if(!i.el)continue;r.copy(i.pos).project(e);let a=r.z<1&&Math.abs(r.x)<1&&Math.abs(r.y)<1&&i.pos.distanceTo(e.position)<(i.r||16);i.el.style.display=a?`block`:`none`,a&&(i.el.style.left=(r.x+1)/2*t+`px`,i.el.style.top=(1-r.y)/2*n+`px`)}}setPanel(e){this.panelItems=e||[];let t=this.panelEl.querySelector(`.body`);t.innerHTML=``;for(let[e,n]of this.panelItems){let r=document.createElement(`div`);r.className=`q`,r.innerHTML=`<span></span><small></small>`,r.firstChild.textContent=e,r.lastChild.textContent=n,t.appendChild(r)}}togglePanel(e){if(this.noPanel)return;let t=e??!this.panelEl.classList.contains(`show`);this.panelEl.classList.toggle(`show`,t)}choose(e,t,n){return new Promise(r=>{let i=this.chooserEl;i.innerHTML=`<div class="paper"><h2></h2><p></p></div>`,i.querySelector(`h2`).textContent=e,i.querySelector(`p`).textContent=t;let a=i.querySelector(`.paper`);for(let e of n){let t=document.createElement(`button`);t.className=`opt`,t.innerHTML=`<span></span><small></small>`,t.firstChild.textContent=e.label,t.lastChild.textContent=e.sub||``,t.disabled=!!e.disabled,t.onclick=()=>{document.activeElement?.blur(),i.classList.remove(`show`),r(e.id)},a.appendChild(t)}i.classList.add(`show`),setTimeout(()=>a.querySelector(`button.opt:not([disabled])`)?.focus(),50),this._auto=()=>{let e=n.find(e=>!e.disabled);i.classList.remove(`show`),r(e.id)}})}ask(e,t,n){return new Promise(r=>{let i=this.chooserEl;i.innerHTML=`<div class="paper"><h2></h2><p></p><input><button class="opt">말한다</button></div>`,i.querySelector(`h2`).textContent=e,i.querySelector(`p`).textContent=t;let a=i.querySelector(`input`);a.placeholder=n||``;let o=()=>{i.classList.remove(`show`),r(a.value.trim())};i.querySelector(`button`).onclick=o,a.onkeydown=e=>{e.stopPropagation(),e.key===`Enter`&&o()},i.classList.add(`show`),setTimeout(()=>a.focus(),50),this._auto=()=>{a.value=`잎사귀`,o()}})}},Ji=class{constructor(){this.ctx=null,this.loops=new Map,this.muted=!1}start(){if(this.ctx)return;let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e;let t=this.ctx;this.master=t.createGain(),this.master.gain.value=this.muted?0:.9;let n=t.createDynamicsCompressor();this.master.connect(n),n.connect(t.destination),this.an=t.createAnalyser(),this.an.fftSize=2048,n.connect(this.an),this.buf=new Float32Array(2048);let r=t.createBuffer(1,t.sampleRate*3,t.sampleRate),i=r.getChannelData(0),a=0;for(let e=0;e<i.length;e++){let t=Math.random()*2-1;a=(a+.02*t)/1.02,i[e]=a*3.5}this.brown=r;let o=t.createBuffer(1,t.sampleRate*2,t.sampleRate),s=o.getChannelData(0);for(let e=0;e<s.length;e++)s[e]=Math.random()*2-1;this.white=o}level(){if(!this.an)return{rms:0,peak:0,state:`none`};this.an.getFloatTimeDomainData(this.buf);let e=0,t=0;for(let n of this.buf)e+=n*n,t=Math.max(t,Math.abs(n));return{rms:Math.sqrt(e/this.buf.length),peak:t,state:this.ctx.state}}toggle(){return this.muted=!this.muted,this.master&&this.master.gain.setTargetAtTime(this.muted?0:.9,this.ctx.currentTime,.05),this.muted}noise(e=`brown`){let t=this.ctx.createBufferSource();return t.buffer=e===`brown`?this.brown:this.white,t.loop=!0,t}loop(e,{type:t=`brown`,freq:n=400,q:r=.7,gain:i=.2,filter:a=`lowpass`,fade:o=1.5,lfo:s=0,lfoDepth:c=0}={}){if(!this.ctx)return;this.stop(e,.3);let l=this.ctx,u=this.noise(t),d=l.createBiquadFilter(),f=l.createGain();d.type=a,d.frequency.value=n,d.Q.value=r,f.gain.value=0,f.gain.setTargetAtTime(i,l.currentTime,o/3),u.connect(d),d.connect(f),f.connect(this.master),u.start();let p=null;if(s){p=l.createOscillator();let e=l.createGain();p.frequency.value=s,e.gain.value=c,p.connect(e),e.connect(f.gain),p.start()}this.loops.set(e,{s:u,g:f,f:d,o:p})}tone(e,{wave:t=`sine`,freq:n=100,gain:r=.05,fade:i=1}={}){if(!this.ctx)return;this.stop(e,.3);let a=this.ctx,o=a.createOscillator(),s=a.createGain();o.type=t,o.frequency.value=n,s.gain.value=0,s.gain.setTargetAtTime(r,a.currentTime,i/3),o.connect(s),s.connect(this.master),o.start(),this.loops.set(e,{s:o,g:s})}set(e,{gain:t,freq:n,time:r=.5}={}){let i=this.loops.get(e);if(!i)return;let a=this.ctx.currentTime;t!=null&&i.g.gain.setTargetAtTime(t,a,r/3),n!=null&&i.f?i.f.frequency.setTargetAtTime(n,a,r/3):n!=null&&i.s.frequency&&i.s.frequency.setTargetAtTime(n,a,r/3)}stop(e,t=1){let n=this.loops.get(e);if(!n)return;this.loops.delete(e);let r=this.ctx.currentTime;n.g.gain.cancelScheduledValues(r),n.g.gain.setTargetAtTime(0,r,t/3),setTimeout(()=>{try{n.s.stop(),n.o&&n.o.stop()}catch{}n.g.disconnect()},t*1e3+200)}stopAll(e=1){for(let t of[...this.loops.keys()])this.stop(t,e);clearInterval(this._beat),this._beat=null}hit({freq:e=800,q:t=2,dur:n=.08,gain:r=.3,type:i=`white`,filter:a=`bandpass`,when:o=0}={}){if(!this.ctx)return;let s=this.ctx,c=s.createBufferSource();c.buffer=i===`brown`?this.brown:this.white;let l=s.createBiquadFilter(),u=s.createGain(),d=s.currentTime+o;l.type=a,l.frequency.value=e,l.Q.value=t,u.gain.setValueAtTime(r,d),u.gain.exponentialRampToValueAtTime(8e-4,d+n),c.connect(l),l.connect(u),u.connect(this.master),c.start(d,Math.random()*1.5,n+.02)}beep({freq:e=440,dur:t=.2,gain:n=.1,wave:r=`sine`,when:i=0,slide:a=0}={}){if(!this.ctx)return;let o=this.ctx,s=o.createOscillator(),c=o.createGain(),l=o.currentTime+i;s.type=r,s.frequency.setValueAtTime(e,l),a&&s.frequency.linearRampToValueAtTime(e+a,l+t),c.gain.setValueAtTime(0,l),c.gain.linearRampToValueAtTime(n,l+.01),c.gain.exponentialRampToValueAtTime(8e-4,l+t),s.connect(c),c.connect(this.master),s.start(l),s.stop(l+t+.02)}step(e=`hard`){let t={hard:[420,1.2,.07,.16],wood:[260,1,.08,.2],snow:[1500,.6,.13,.14],stair:[320,1,.09,.2],concrete:[520,1.4,.06,.16]}[e]||[420,1,.07,.15];this.hit({freq:t[0]*(.9+Math.random()*.2),q:t[1],dur:t[2],gain:t[3]}),e===`snow`&&this.hit({freq:3200,q:.7,dur:.09,gain:.04,when:.03})}ping(){this.beep({freq:1900,dur:.05,gain:.05,wave:`triangle`})}thud(e=.5){this.hit({freq:90,q:1,dur:.28,gain:e,type:`brown`,filter:`lowpass`})}clink(){for(let e=0;e<3;e++)this.beep({freq:2400+Math.random()*1800,dur:.08,gain:.025,wave:`triangle`,when:e*.06+Math.random()*.03})}phoneDead(){this.hit({freq:900,q:.5,dur:.3,gain:.03})}muffledBeat(e=.08){if(!this.ctx||this._beat)return;let t=0;this._beat=setInterval(()=>{t%4==0&&this.hit({freq:110,q:1,dur:.2,gain:e,type:`brown`,filter:`lowpass`}),t%4==2&&this.hit({freq:520,q:1.5,dur:.09,gain:e*.5}),t++},270)}stopBeat(){clearInterval(this._beat),this._beat=null}guitar(e=.016){[196,247,294,247].forEach((t,n)=>this.beep({freq:t,dur:.9,gain:e,wave:`triangle`,when:n*.5}))}howl(e=.09,t=2.2){if(!this.ctx)return;let n=this.ctx,r=n.currentTime,i=n.createOscillator(),a=n.createOscillator(),o=n.createBiquadFilter(),s=n.createGain();i.type=`sawtooth`,a.type=`sawtooth`;let c=150+Math.random()*50;i.frequency.setValueAtTime(c,r),i.frequency.linearRampToValueAtTime(c*1.9,r+t*.4),i.frequency.linearRampToValueAtTime(c*.8,r+t),a.frequency.setValueAtTime(c*1.03,r),a.frequency.linearRampToValueAtTime(c*1.85,r+t*.4),a.frequency.linearRampToValueAtTime(c*.82,r+t),o.type=`bandpass`,o.frequency.setValueAtTime(600,r),o.frequency.linearRampToValueAtTime(1200,r+t*.4),o.Q.value=2.2,s.gain.setValueAtTime(0,r),s.gain.linearRampToValueAtTime(e,r+.3),s.gain.linearRampToValueAtTime(0,r+t),i.connect(o),a.connect(o),o.connect(s),s.connect(this.master),i.start(r),a.start(r),i.stop(r+t),a.stop(r+t)}thunder(e=`apc`){this.loop(e,{type:`brown`,freq:120,q:.6,gain:0,fade:.1}),this.loop(e+`2`,{type:`brown`,freq:380,q:1.5,filter:`bandpass`,gain:0,fade:.1,lfo:13,lfoDepth:.03})}},Yi={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Xi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Zi=new F(-1,1,1,-1,0,1),Qi=new class extends wt{constructor(){super(),this.setAttribute(`position`,new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new lt([0,2,0,0,2,0],2))}},$i=class{constructor(e){this._mesh=new H(Qi,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Zi)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},ea=class extends Xi{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof We?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=g.clone(e.uniforms),this.material=new We({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $i(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},ta=class extends Xi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},na=class extends Xi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},ra=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new L);this._width=n.width,this._height=n.height,t=new Ue(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_t}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ea(Yi),this.copyPass.material.blending=0,this.timer=new o}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}ta!==void 0&&(r instanceof ta?n=!0:r instanceof na&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new L);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},ia=class extends Xi{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new U}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},aa={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new U(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},oa=class e extends Xi{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new L(256,256):new L(e.x,e.y),this.clearColor=new U(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ue(i,a,{type:_t,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Ue(i,a,{type:_t,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Ue(i,a,{type:_t,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=aa;this.highPassUniforms=g.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new L(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=g.clone(Yi.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:Yi.vertexShader,fragmentShader:Yi.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new U,this._oldClearAlpha=1,this._basic=new V,this._fsQuad=new $i(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new L(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new We({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new L(.5,.5)},direction:{value:new L(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new We({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};oa.BlurDirectionX=new L(1,0),oa.BlurDirectionY=new L(0,1);var sa={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},ca=class extends Xi{constructor(){super(),this.isOutputPass=!0,this.uniforms=g.clone(sa.uniforms),this.material=new Ce({name:sa.name,uniforms:this.uniforms,vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader}),this._fsQuad=new $i(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},D.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},la={uniforms:{tDiffuse:{value:null},uT:{value:0},uGrain:{value:.035},uVig:{value:.5},uSat:{value:.72},uLift:{value:0},uTint:{value:new U(1,1,1)},uSoft:{value:0},uPulse:{value:0}},vertexShader:`varying vec2 v;void main(){v=uv;gl_Position=vec4(position.xy,0.,1.);}`,fragmentShader:`uniform sampler2D tDiffuse;uniform float uT,uGrain,uVig,uSat,uLift,uSoft,uPulse;uniform vec3 uTint;varying vec2 v;
 float h(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
 void main(){vec2 p=v-.5;float r=dot(p,p);vec3 c=texture2D(tDiffuse,v).rgb;
 if(uSoft>0.){vec3 b=vec3(0.);for(int i=0;i<8;i++){float a=float(i)*.785;b+=texture2D(tDiffuse,v+vec2(cos(a),sin(a))*.006*uSoft*(.5+r*3.)).rgb;}c=mix(c,b/8.,clamp(uSoft,0.,1.));}
 float l=dot(c,vec3(.3,.59,.11));c=mix(vec3(l),c,uSat)*uTint;c+=uLift;c*=1.-uVig*smoothstep(.1,.62,r*(1.+uPulse*.6));
 c+=(h(gl_FragCoord.xy+fract(uT)*613.)-.5)*uGrain;gl_FragColor=vec4(c,1.);}`},ua=class{constructor(e){this.e=e,this.mode=`none`,this.yaw=0,this.pitch=0,this.pos=new G,this.eye=1.62,this.speed=2,this.keys={},this.nav=null,this.walked=0,this.stepEvery=.72,this.surface=`hard`,this.limit=null,this.target=null,this.orbit={t:new G,yaw:0,pitch:.9,dist:1800,min:60,max:5200},this.look=new L,this.lockMove=!1;let t=e.canvas,n=null,r=new Map,i=0;t.addEventListener(`contextmenu`,e=>{this.orbit.panDrag&&e.preventDefault()}),t.addEventListener(`pointerdown`,a=>{if(e.pointer.x=a.clientX/innerWidth*2-1,e.pointer.y=-a.clientY/innerHeight*2+1,e.pointerSeen=!0,t.setPointerCapture(a.pointerId),a.isPrimary&&r.clear(),r.set(a.pointerId,[a.clientX,a.clientY]),r.size>=2){let[e,t]=[...r.values()];i=Math.hypot(e[0]-t[0],e[1]-t[1]),n&&(n.moved=99)}else n={x:a.clientX,y:a.clientY,lx:a.clientX,ly:a.clientY,moved:0,btn:a.button};this.onTouch?.(),e.audio.start()}),t.addEventListener(`pointermove`,t=>{if(e.pointer.x=t.clientX/innerWidth*2-1,e.pointer.y=-t.clientY/innerHeight*2+1,e.pointerSeen=!0,r.has(t.pointerId)&&r.set(t.pointerId,[t.clientX,t.clientY]),r.size>=2&&this.mode===`orbit`){let[e,t]=[...r.values()],n=Math.hypot(e[0]-t[0],e[1]-t[1]);if(i>0&&n>0){let e=this.orbit;e.dist=B.clamp(e.dist*i/n,e.min,e.max)}i=n;return}if(!n)return;let a=t.clientX-n.lx,o=t.clientY-n.ly;n.lx=t.clientX,n.ly=t.clientY,n.moved+=Math.abs(a)+Math.abs(o),this.mode===`walk`||this.mode===`look`?(this.yaw-=a*.0034,this.pitch=B.clamp(this.pitch-o*.0034,-1.2,1.2)):this.mode===`orbit`&&(this.orbit.panDrag&&n.btn===0&&!t.shiftKey?this.panBy(a,o):(this.orbit.yaw-=a*.005,this.orbit.pitch=B.clamp(this.orbit.pitch+o*.004,.12,1.45)))}),t.addEventListener(`pointerup`,t=>{let a=r.size>1;if(r.delete(t.pointerId),r.size<2&&(i=0),a){if(n&&(n.moved=99,r.size===1)){let[e]=[...r.values()];n.lx=e[0],n.ly=e[1]}}else n&&n.moved<7&&e.onClick(t),n=null}),t.addEventListener(`pointercancel`,e=>{r.delete(e.pointerId),i=0,n=null}),t.addEventListener(`lostpointercapture`,e=>{r.delete(e.pointerId),r.size<2&&(i=0)}),t.addEventListener(`wheel`,e=>{if(e.preventDefault(),this.onTouch?.(),this.mode===`orbit`){let t=this.orbit;t.dist=B.clamp(t.dist*Math.exp(e.deltaY*.0011),t.min,t.max)}},{passive:!1}),addEventListener(`keydown`,t=>{this.keys[t.code]=!0;let n=document.activeElement?.tagName;n!==`INPUT`&&(n!==`BUTTON`||t.code!==`Enter`&&t.code!==`Space`)&&([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Space`].includes(t.code)&&t.preventDefault(),e.onKey(t))}),addEventListener(`keyup`,e=>{this.keys[e.code]=!1}),addEventListener(`blur`,()=>{this.keys={}})}place(e,t,n,r=0,i=0){this.pos.set(e,t,n),this.yaw=r,this.pitch=i,this.target=null}inside(e,t){let n=this.nav;if(!n)return!0;if(this.blocks&&this.pos){for(let n of this.blocks)if(this.pos.y>=n[4]-.5&&this.pos.y<n[5]&&e>n[0]&&e<n[1]&&t>n[2]&&t<n[3])return!1}if(typeof n==`function`)return n(e,t);for(let r of n)if(e>=r[0]&&e<=r[1]&&t>=r[2]&&t<=r[3])return!0;return!1}panBy(e,t){let n=this.orbit,r=n.dist*Math.tan(this.e.camera.fov*Math.PI/360)*2/innerHeight,i=Math.sin(n.yaw),a=Math.cos(n.yaw),o=t/Math.max(.35,Math.sin(n.pitch));n.t.x+=(-a*e-i*o)*r,n.t.z+=(i*e-a*o)*r}update(e){let t=this.keys,n=this.e.camera;if(this.mode===`walk`){if(!this.lockMove){let n=(t.KeyW||t.ArrowUp?1:0)-(t.KeyS||t.ArrowDown?1:0),r=+!!t.KeyD-!!t.KeyA,i=+!!t.KeyZ-!!t.KeyC;this.yaw+=i*e*1.5,this.target&&(n||r)&&(this.target=null);let a=0,o=0,s=Math.sin(this.yaw),c=Math.cos(this.yaw);if(n||r){let t=Math.hypot(n,r);n/=t,r/=t,a=(-s*n+c*r)*this.speed*e,o=(-c*n-s*r)*this.speed*e}else if(this.target){let t=this.target.x-this.pos.x,n=this.target.z-this.pos.z,r=Math.hypot(t,n);if(r<.15)this.target=null;else{let i=Math.min(r,this.speed*e);a=t/r*i,o=n/r*i;let s=Math.atan2(-t,-n)-this.yaw;s=Math.atan2(Math.sin(s),Math.cos(s)),this.yaw+=s*Math.min(1,e*2.2)}}let l=this.pos.x,u=this.pos.z;this.inside(l+a,u)?this.pos.x+=a:this.target&&=null,this.inside(this.pos.x,u+o)?this.pos.z+=o:this.target&&=null;let d=Math.hypot(this.pos.x-l,this.pos.z-u);this.walked+=d,this.walked>this.stepEvery&&(this.walked=0,this.e.audio.step(this.surface))}this.bob=this.bob||0;let r=Math.sin(this.walkPhase=(this.walkPhase||0)+e*(t.KeyW?7:0))*.012;n.position.set(this.pos.x,this.pos.y+this.eye+r,this.pos.z),n.rotation.set(0,0,0,`YXZ`),n.rotation.order=`YXZ`,n.rotation.y=this.yaw,n.rotation.x=this.pitch}else if(this.mode===`look`){let e=this.limit;e&&(this.yaw=B.clamp(this.yaw,e[0],e[1]),this.pitch=B.clamp(this.pitch,e[2],e[3]));let t=this.parent;if(t){n.position.copy(this.pos).applyMatrix4(t.matrixWorld);let e=new k().setFromEuler(new he(this.pitch,this.yaw,0,`YXZ`));n.quaternion.copy(t.getWorldQuaternion(new k)).multiply(e)}else n.position.copy(this.pos),n.rotation.order=`YXZ`,n.rotation.set(this.pitch,this.yaw,0)}else if(this.mode===`orbit`){let r=this.orbit;if(r.panDrag){let n=+!!t.KeyW-!!t.KeyS,i=+!!t.KeyD-!!t.KeyA,a=(t.Equal||t.NumpadAdd?1:0)-(t.Minus||t.NumpadSubtract?1:0),o=+!!t.KeyZ-!!t.KeyC;(n||i||a||o)&&this.onTouch?.();let s=Math.sin(r.yaw),c=Math.cos(r.yaw),l=r.dist*.55*e;r.t.x+=(-s*n+c*i)*l,r.t.z+=(-c*n-s*i)*l,r.dist=B.clamp(r.dist*Math.exp(-a*e*1.2),r.min,r.max),r.yaw+=o*e*.9}else{let n=+!!t.KeyA-!!t.KeyD;r.yaw+=n*e}let i=Math.cos(r.pitch),a=Math.sin(r.pitch);n.position.set(r.t.x+Math.sin(r.yaw)*i*r.dist,r.t.y+a*r.dist,r.t.z+Math.cos(r.yaw)*i*r.dist),n.lookAt(r.t)}}},da=class{constructor(e,t,i){this.canvas=e,this.hud=t,this.audio=i,this.pointer=new L(0,0),this.pointerSeen=!1;let a=this.renderer=new Wi({canvas:e,antialias:!1,powerPreference:`high-performance`,preserveDrawingBuffer:new URLSearchParams(location.search).has(`shot`)});a.setPixelRatio(Math.min(devicePixelRatio,1.5)),a.setSize(innerWidth,innerHeight),a.toneMapping=4,a.toneMappingExposure=1,a.outputColorSpace=ee,this.camera=new p(58,innerWidth/innerHeight,.05,9e3),this.scene=new r;let o=new Ue(innerWidth,innerHeight,{type:_t,samples:2});this.composer=new ra(a,o),this.composer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.rp=new ia(this.scene,this.camera),this.composer.addPass(this.rp),this.bloom=new oa(new L(innerWidth,innerHeight),.35,.6,.82),this.composer.addPass(this.bloom),this.composer.addPass(new ca),this.grade=new ea(la),this.composer.addPass(this.grade),this.controls=new ua(this),this.clock=new n,this.ray=new St,this.current=null,this.hots=[],this.tmp=new G,this.frustum=new be,this.pm=new et,this.time=0,this.floorPick=null,addEventListener(`resize`,()=>{a.setSize(innerWidth,innerHeight),this.composer.setSize(innerWidth,innerHeight),this.bloom.setSize(innerWidth,innerHeight),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix()}),a.setAnimationLoop(()=>this.frame())}post(e={}){let t=this.grade.uniforms,n={grain:.035,vig:.5,sat:.72,lift:0,soft:0,tint:[1,1,1],bloom:.35,exposure:1,pulse:0,...e};t.uGrain.value=n.grain,t.uVig.value=n.vig,t.uSat.value=n.sat,t.uLift.value=n.lift,t.uSoft.value=n.soft,t.uTint.value.setRGB(...n.tint),t.uPulse.value=n.pulse,this.bloom.strength=n.bloom,this.renderer.toneMappingExposure=n.exposure}show(e){this.current=e,this.scene=e.scene,this.rp.scene=e.scene,this.hots=e.hots||[],this.camera.fov=e.fov||58,this.camera.far=e.far||9e3,this.camera.near=e.near||.05,this.camera.updateProjectionMatrix(),this.post(e.post),this.hud.setMarks(e.marks),this.hud.setPanel(e.panel),this.hud.imagine(!1),this.hud.hot(``)}hotUnder(){if(!this.hots.length)return null;let e=this.pointerSeen;this.ray.setFromCamera(e?this.pointer:new L(0,0),this.camera);let t=this.hots.filter(e=>e.userData.hot&&e.visible&&e.userData.hot.on!==!1),n=this.ray.intersectObjects(t,!0)[0];if(!n)return null;let r=n.object;for(;r&&!r.userData.hot;)r=r.parent;if(!r)return null;let i=r.userData.hot.range||3.2;return n.distance<=i?r:null}onClick(){let e=this.hotUnder();if(e)this.useHot(e);else{if(this.controls.mode===`walk`&&this.floorPick){this.ray.setFromCamera(this.pointer,this.camera);let e=this.ray.intersectObjects(this.floorPick,!1)[0];e&&this.controls.inside(e.point.x,e.point.z)&&(this.controls.target=e.point.clone())}this.current?.onClick?.()}}useHot(e){let t=e.userData.hot;t.once!==!1&&(t.on=!1),this.hud.hot(``),t.use?.(e)}onKey(e){if(!e.repeat){if(e.code===`ArrowLeft`||e.code===`ArrowRight`){let t=e.code===`ArrowRight`?1:-1;e.shiftKey?this.onChapter?.(t):this.onLine?.(t)}else{if(e.code===`KeyE`||e.code===`Enter`||e.code===`Space`){let t=this.hotUnderCenter();t&&this.useHot(t),this.current?.onKey?.(e)}e.code===`KeyG`&&this.hud.toggleGrades(),e.code===`KeyQ`&&this.hud.togglePanel(),e.code===`KeyM`&&this.hud.mapHandler&&this.hud.mapHandler()}}}hotUnderCenter(){this.ray.setFromCamera(new L(0,0),this.camera);let e=this.hots.filter(e=>e.userData.hot&&e.visible&&e.userData.hot.on!==!1),t=this.ray.intersectObjects(e,!0)[0];if(t){let e=t.object;for(;e&&!e.userData.hot;)e=e.parent;if(e&&t.distance<=(e.userData.hot.range||3.2))return e}let n=this.hotUnder();if(n)return n;let r=this.camera.position,i=this.camera.getWorldDirection(new G),a=new G;i.y=0,i.normalize();let o=null,s=1e9;for(let t of e){if(t.userData.hot.once===!1)continue;t.getWorldPosition(a);let e=a.distanceTo(r);e>(t.userData.hot.range||3.2)+.6||(a.sub(r),a.y=0,a.length()>.01&&a.normalize().dot(i)<.55||e<s&&(s=e,o=t))}return o}adapt(e){if(e>.35){this.acc=0,this.cnt=0;return}if(this.acc=(this.acc||0)+e,this.cnt=(this.cnt||0)+1,this.acc<2.5)return;let t=this.cnt/this.acc;if(this.acc=0,this.cnt=0,this.lastFps=t,!(document.hidden||this.hud.fadeEl.style.opacity===`1`)&&t<27&&(this.q||0)<3){this.q=(this.q||0)+1;let e=[1.5,1,.8,.65][this.q],t=Math.min(devicePixelRatio,e);this.renderer.setPixelRatio(t),this.composer.setPixelRatio(t),this.renderer.setSize(innerWidth,innerHeight),this.composer.setSize(innerWidth,innerHeight),this.q>=3&&(this.bloom.enabled=!1)}}frame(){let e=this.clock.getDelta();this.adapt(e);let t=Math.min(e,.05);this.time+=t,this.grade.uniforms.uT.value=this.time,this.controls.update(t);let n=this.current;if(n){n.update?.(t,this.time),this.updateImagine();let e=this.hots.length?this.hotUnder():null;this.hud.hot(e?e.userData.hot.label:``),n.ownCursor||(this.canvas.style.cursor=e?`pointer`:``)}this.camera.updateMatrixWorld(),this.hud.updateMarks(this.camera,innerWidth,innerHeight),this.composer.render(t)}updateImagine(){let e=this.current;if(!e)return;if(e.imagineFn){this.hud.imagine(!!e.imagineFn());return}if(e.imagineAll){this.hud.imagine(!0);return}let t=e.imagined;if(!t||!t.length){this.hud.imagine(!1);return}this.pm.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.pm);let n=!1;for(let e of t){this.tmp.set(e.p[0],e.p[1],e.p[2]);let t=this.tmp.distanceTo(this.camera.position);if(t<(e.d||14)&&(this.frustum.containsPoint(this.tmp)||t<(e.r||2))){n=!0;break}}this.hud.imagine(n)}},fa=e=>new Promise(t=>setTimeout(t,e*1e3)),pa=class{constructor(e,t,n,r){this.e=e,this.hud=t,this.a=n,this.auto=r.has(`auto`),this.speed=this.auto?.04:1,this.state=this.load(),this.stageId=``,this.city=null,this.params=r,this.hist=[],this.review=null,this.saying=0,this.waits=new Set}load(){try{return JSON.parse(localStorage.getItem(`che-state`)||`{}`)}catch{return{}}}save(){try{localStorage.setItem(`che-state`,JSON.stringify(this.state))}catch{}}wait(e){return new Promise(t=>{let n=()=>{clearTimeout(r),this.waits.delete(n),t()},r=setTimeout(n,e*this.speed*1e3);this.waits.add(n)})}async say(e,t={}){for(;this.review!=null;)await fa(.1);let n=this._sayId=(this._sayId||0)+1;this.hist.push({text:e,o:t}),this.saying=n,this.hud.line(e,t);let r=t.dur??Math.max(2.6,e.length*.095+1.2);await this.hold(r*this.speed),n===this._sayId&&(this.saying=0,this.review??this.hud.clearLine()),await this.wait(.5)}hold(e){this._skip=!1;let t=e*1e3;return new Promise(e=>{let n=setInterval(()=>{this.review??(t-=50),(this._skip||t<=0)&&(clearInterval(n),this._skip=!1,e())},50)})}line(e){let t=this.hist,n=!!this.saying,r=()=>{let e=t[this.review];this.hud.line(e.text,{...e.o,ref:(e.o.ref?e.o.ref+` · `:``)+`이전 대사`}),clearTimeout(this._rv),this._rv=setTimeout(()=>this.endReview(),12e3)};if(e>0){if(this.review==null){n?this._skip=!0:([...this.waits].forEach(e=>e()),this.e.current?.onNext?.());return}if(this.review++,this.review>=(n?t.length-1:t.length)){this.endReview();return}r();return}let i=t.length-(n?2:1);if(this.review==null){if(i<0)return;this.review=i}else this.review=Math.max(0,this.review-1);r()}endReview(){clearTimeout(this._rv),this.review=null;let e=this.hist;if(this.saying&&e.length){let t=e[e.length-1];this.hud.line(t.text,t.o)}else this.hud.clearLine()}async seq(e){for(let t of e)typeof t==`string`?await this.say(t):await this.say(t[0],t[1])}sfx(e,t){this.hud.sfx(e,t)}hint(e){this.hud.hint(e)}until(e,{timeout:t=0}={}){return new Promise(n=>{let r=e.userData.hot,i=r.use;r.on=!0,r.use=e=>{i?.(e),n(e)},this.auto?setTimeout(()=>{r.on!==!1&&this.e.useHot(e)},60):t&&setTimeout(()=>{r.on!==!1&&this.e.useHot(e)},t*1e3)})}face(e,t,n,r=.9){let i=this.e.controls,a=this.e.camera,o=new G(e,t,n);i.parent&&i.parent.worldToLocal(o);let s=i.parent?i.pos:a.position,c=Math.atan2(-(o.x-s.x),-(o.z-s.z)),l=Math.atan2(o.y-s.y,Math.hypot(o.x-s.x,o.z-s.z)),u=i.yaw,d=i.pitch,f=c-u;f=Math.atan2(Math.sin(f),Math.cos(f));let p=performance.now(),m=Math.max(.01,r*this.speed)*1e3;return new Promise(e=>{let t=setInterval(()=>{let n=Math.min(1,(performance.now()-p)/m),r=n*n*(3-2*n);i.yaw=u+f*r,i.pitch=d+(l-d)*r,n>=1&&(clearInterval(t),e())},16)})}any(e){return new Promise(t=>{let n=!1;for(let r of e){let e=r.userData.hot,i=e.use;e.on=!0,e.use=e=>{i?.(e),n||(n=!0,t(r))}}this.auto&&setTimeout(()=>{n||this.e.useHot(e[0])},60)})}walkUntil(e,{after:t=0,fn:n=null}={}){return new Promise(r=>{let i=performance.now(),a=0,o=setInterval(()=>{let s=performance.now();e()||this.auto?(clearInterval(o),r()):n&&t&&(s-i)/1e3>t&&s-a>3e3&&(a=s,n())},100)})}pick(){let e=new H(new N(9e3,9e3),new V({visible:!1,side:2}));return e.rotation.x=-Math.PI/2,e}choose(e,t,n){let r=this.hud.choose(e,t,n);return this.auto&&setTimeout(()=>this.hud._auto(),60),r}ask(e,t,n){let r=this.hud.ask(e,t,n);return this.auto&&setTimeout(()=>this.hud._auto(),60),r}async enter(e,{fade:t=1.4}={}){this.e.show(e),await this.wait(.05),await this.hud.fade(!1,this.auto?.05:t)}async leave(e=1.2){await this.hud.fade(!0,this.auto?.05:e),this.hud.clearLine(),this.hud.hint(``),this.a.stopAll(.6),this.dispose()}dispose(){let e=this.e.current;this.e.current=null,this.e.hots=[],this.e.floorPick=null,this.e.controls.mode=`none`,this.e.controls.lockMove=!1,this.e.controls.nav=null,this.e.controls.blocks=null,this.e.controls.limit=null,this.e.controls.parent=null,this.hud.viewfinder(!1),this.hud.imagine(!1),e&&e.scene&&!e.keep&&e.scene.traverse(e=>{e.geometry&&!e.geometry.userData?.shared&&e!==this.city?.bld&&e.isMesh&&e.parent!==this.city?.g&&e.geometry.dispose?.()})}};function ma(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new wt;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=ha(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=ha(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function ha(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),c=new s(o,n,r),l=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=l/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);c.setComponent(t+e,i,n)}}else o.set(r.array,l);l+=r.count*n}return i!==void 0&&(c.gpuType=i),c}var ga=null;async function _a(){return ga||(ga=await(await fetch(new URL(`data/city.json`,document.baseURI))).json(),ga)}var va=e=>{let t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t};function ya(e,t=0){let n=[],r=[],i=[],a=[],o=[];for(let t of e){let e=t[0],s=va(t.slice(1)),c=0;for(let e=0;e<s.length;e++){let t=s[e],n=s[(e+1)%s.length];c+=t[0]*n[1]-n[0]*t[1]}c<0&&s.reverse();let l=Math.abs(Math.sin(s[0][0]*12.9+s[0][1]*7.7)*43758.5)%1,u=0;for(let t=0;t<s.length;t++){let c=s[t],d=s[(t+1)%s.length],f=d[0]-c[0],p=d[1]-c[1],m=Math.hypot(f,p)||1,h=p/m,g=-f/m;n.push(c[0],0,c[1],d[0],0,d[1],d[0],e,d[1],c[0],0,c[1],d[0],e,d[1],c[0],e,c[1]);for(let e=0;e<6;e++)r.push(-h,0,-g),a.push(l),o.push(0);i.push(u,0,u+m,0,u+m,e,u,0,u+m,e,u,e),u+=m}let d=ne.triangulateShape(s.map(e=>new L(e[0],e[1])),[]);for(let t of d)for(let c of[t[2],t[1],t[0]])n.push(s[c][0],e,s[c][1]),r.push(0,1,0),a.push(l),o.push(1),i.push(s[c][0],s[c][1])}let s=new wt;return s.setAttribute(`position`,new lt(n,3)),s.setAttribute(`normal`,new lt(r,3)),s.setAttribute(`aUv`,new lt(i,2)),s.setAttribute(`aSeed`,new lt(a,1)),s.setAttribute(`aRoof`,new lt(o,1)),s}function ba(){return new We({uniforms:{uFog:{value:new U(1382170)},uFogD:{value:.0012},uSky:{value:new U(.09,.1,.11)},uSun:{value:new U(0,0,0)},uSunDir:{value:new G(.4,.6,.3).normalize()},uLit:{value:.3},uSnow:{value:0},uWin:{value:1},uBase:{value:new U(.34,.33,.31)},uT:{value:0}},vertexShader:`attribute vec2 aUv;attribute float aSeed,aRoof;varying vec2 vU;varying float vS,vR,vD;varying vec3 vN,vW;void main(){vU=aUv;vS=aSeed;vR=aRoof;vN=normal;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;vec4 m=viewMatrix*w;vD=-m.z;gl_Position=projectionMatrix*m;}`,fragmentShader:`uniform vec3 uFog,uSky,uSun,uSunDir,uBase;uniform float uFogD,uLit,uSnow,uWin,uT;varying vec2 vU;varying float vS,vR,vD;varying vec3 vN,vW;
 float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
 void main(){vec3 N=normalize(vN);float lam=max(dot(N,uSunDir),0.);float sky=.55+.45*N.y;vec3 c;
 if(vR>.5){c=mix(vec3(.05,.05,.055),vec3(.11,.1,.09),n(vU*.15));c=mix(c,vec3(.86,.89,.93),uSnow*smoothstep(.2,.7,n(vU*.4)+.4));c*=uSky*6.+uSun*lam*1.2;}
 else{float mx=3.5+vS*.9,my=3.25;vec2 g=vec2(vU.x/mx,vU.y/my);vec2 cell=floor(g),f=fract(g);float lod=clamp(vD*.0012,0.,1.);float win=smoothstep(.2,.24,f.x)*smoothstep(.8,.76,f.x)*smoothstep(.24,.28,f.y)*smoothstep(.8,.76,f.y);if(vU.y<3.6)win*=.0;win*=uWin;
 vec3 pl=uBase*mix(vec3(.82,.8,.76),vec3(1.12,1.06,.96),vS);pl*=.72+.42*n(vec2(vU.x*.08,vU.y*.2+vS*9.));pl*=1.-.3*smoothstep(0.,1.,n(vec2(vU.x*.7,vU.y*.05)))*(1.-smoothstep(0.,14.,vU.y));pl*=.92+.08*smoothstep(.0,.05,f.y);
 pl=mix(pl,pl*.72,step(vU.y,3.4));
 float lit=step(h(cell+vS*31.),uLit);vec3 glass=vec3(.018,.02,.024)+uSky*.5*n(cell*3.);vec3 lamp=mix(vec3(.95,.62,.28),vec3(.8,.75,.55),h(cell+3.))*(.46+.34*h(cell+7.));
 c=(pl*(uSky*5.2*sky+uSun*lam*1.1));vec3 fr=pl*.6;c=mix(c,fr,(1.-win)*0.);c=mix(c,lit>.5?lamp:glass*(1.+uSun*lam*2.),win*(1.-lod*.75));c+=lamp*lit*uWin*lod*.09;
 if(vU.y<3.4){float sh=step(.15,fract(vU.x/9.+vS))*step(fract(vU.x/9.+vS),.85)*smoothstep(.5,.6,vU.y)*smoothstep(3.,2.9,vU.y);float on=step(h(vec2(floor(vU.x/9.+vS),vS)),uLit*.7);c=mix(c,on>.5?vec3(.85,.62,.3)*.42:vec3(.015),sh*uWin*(1.-lod*.9));}}
 float fog=1.-exp(-(vD*uFogD)*(vD*uFogD));c=mix(c,uFog,clamp(fog,0.,1.));gl_FragColor=vec4(c,1.);}`})}function xa(e,t,n=0){let r=[],i=[];for(let a=0;a<e.length;a++){let o=e[Math.max(0,a-1)],s=e[Math.min(e.length-1,a+1)],c=s[0]-o[0],l=s[1]-o[1],u=Math.hypot(c,l)||1,d=l/u*t/2,f=-c/u*t/2,p=e[a];if(r.push(p[0]+d,n,p[1]+f,p[0]-d,n,p[1]-f),a){let e=(a-1)*2;i.push(e,e+1,e+2,e+1,e+3,e+2)}}let a=new wt;a.setAttribute(`position`,new lt(r,3)),a.setIndex(i);{let e=[];for(let t=0;t<r.length;t+=3)e.push(0,1,0);a.setAttribute(`normal`,new lt(e,3))}let o=[],s=0;for(let t=0;t<e.length;t++)t&&(s+=Math.hypot(e[t][0]-e[t-1][0],e[t][1]-e[t-1][1])),o.push(0,s/8,1,s/8);return a.setAttribute(`uv`,new lt(o,2)),a}function Sa(e){let t={},n=[],r=[],i=[],a=[],o=[20,13,8.5,7];for(let t of e.roads){let e=t[0],i=va(t.slice(2));i.length<2||(n.push(xa(i,o[e],.06)),r.push(xa(i,o[e]+6,.04)))}for(let t of e.tram){let e=va(t);e.length>1&&i.push(xa(e,.11,.1))}for(let t of e.rail){let e=va(t);e.length>1&&a.push(xa(e,2,.05))}t.road=ma(n),t.walk=ma(r),t.tram=i.length?ma(i):null,t.rail=a.length?ma(a):null,t.parks=ma(e.parks.map(e=>{let t=va(e);if(t.length<3)return null;let n=new O(t.map(e=>new L(e[0],-e[1]))),r=new j(n);return r.rotateX(-Math.PI/2),r.translate(0,.03,0),r}).filter(Boolean));let s=e.river.map(va).sort((e,t)=>e[0][1]-t[0][1]),c=s[0];if(s[1]){let e=s[0],t=s[1],n=e=>[...e].reverse(),r=[[e,t],[e,n(t)],[n(e),t],[n(e),n(t)]].map(([e,t])=>({p:e,q:t,d:Math.hypot(e.at(-1)[0]-t[0][0],e.at(-1)[1]-t[0][1])})).sort((e,t)=>e.d-t.d);c=r[0].p.concat(r[0].q.slice(1))}return c[0][1]>c.at(-1)[1]&&(c=[...c].reverse()),t.river=c,t.bld=ya(e.bld),t.mat=ba(),t}var Ca=class{constructor(e){this.data=e;let t=this.s=Sa(e);this.g=new R,this.fogObj=new _e(1052948,.002),this.sMat=new At({color:2894893,roughness:.5,metalness:.05,side:2}),this.road=new H(t.road,this.sMat),this.wMat=new At({color:4868165,roughness:.8,side:2}),this.walk=new H(t.walk,this.wMat),this.pMat=new At({color:2763814,roughness:1}),this.parks=new H(t.parks,this.pMat),this.bld=new H(t.bld,t.mat),this.bld.frustumCulled=!1,this.gMat=new At({color:3749942,roughness:1});let n=t.river,r=[],i=[];for(let e=0;e<n.length;e++){let t=n[Math.max(0,e-1)],a=n[Math.min(n.length-1,e+1)],o=a[0]-t[0],s=a[1]-t[1],c=Math.hypot(o,s)||1,l=s/c,u=-o/c;r.push([n[e][0]+l*360/2,n[e][1]+u*360/2]),i.push([n[e][0]-l*360/2,n[e][1]-u*360/2])}let a=r[0][0]<i[0][0]?r:i,o=r[0][0]<i[0][0]?i:r;this.west=a,this.east=o;let s=7e3,c=(e,t)=>{let n=e[0],r=e.at(-1),i=[...e.map(e=>new L(e[0],-e[1])),new L(r[0],-(r[1]+s)),new L(t,-(r[1]+s)),new L(t,-(n[1]-s)),new L(n[0],-(n[1]-s))],a=new j(new O(i));return a.rotateX(-Math.PI/2),a};this.gw=new H(c(a,-7e3),this.gMat),this.ge=new H(c(o,s),this.gMat),this.rMat=new At({color:461325,roughness:.28,metalness:.35});let l=new H(new N(14e3,2e4),this.rMat);l.rotation.x=-Math.PI/2,l.position.set(800,-9,0),this.river=l;let u=e=>{let t=[];for(let n=0;n<e.length-1;n++)t.push(e[n][0],0,e[n][1],e[n+1][0],0,e[n+1][1],e[n+1][0],-10,e[n+1][1],e[n][0],0,e[n][1],e[n+1][0],-10,e[n+1][1],e[n][0],-10,e[n][1]);let n=new wt;return n.setAttribute(`position`,new lt(t,3)),n.computeVertexNormals(),n};this.bankMat=new At({color:2894632,side:2,roughness:1}),this.g.add(new H(u(a),this.bankMat),new H(u(o),this.bankMat)),this.g.add(this.gw,this.ge,this.river,this.walk,this.road,this.parks,this.bld),t.tram&&this.g.add(new H(t.tram,new At({color:5593180,metalness:.5,roughness:.5}))),t.rail&&this.g.add(new H(t.rail,new At({color:2104860,roughness:1}))),this.bridge(),this.lamps=null}streets(e){return(this.data.streets[e]||[]).map(va)}bridge(){let e=[...this.streets(`Most Księcia Józefa Poniatowskiego`).reduce((e,t)=>Math.hypot(t.at(-1)[0]-t[0][0],t.at(-1)[1]-t[0][1])>Math.hypot(e.at(-1)[0]-e[0][0],e.at(-1)[1]-e[0][1])?t:e)].sort((e,t)=>e[0]-t[0]);this.bridgeLine=e;let t=new At({color:4934215,roughness:.9}),n=new H(xa(e,24,-.1),t),r=new H(xa(e,24,-2.2),t);r.material=t,this.g.add(n,r),this.bridgeMat=t;for(let n=0;n<e.length-1;n++){let r=e[n],i=e[n+1],a=Math.hypot(i[0]-r[0],i[1]-r[1]),o=Math.ceil(a/78);for(let e=0;e<o;e++){let n=e/o,a=r[0]+(i[0]-r[0])*n,s=r[1]+(i[1]-r[1])*n,c=new H(new ce(6,8,20),t);c.position.set(a,-6,s),c.rotation.y=-Math.atan2(i[1]-r[1],i[0]-r[0]),this.g.add(c)}}}trees(e,{seed:t=3,frost:n=0,h:r=11}={}){let i=[1,2,3].map(e=>new V({map:xt(t+e,{frost:n}),transparent:!0,alphaTest:.4,side:2,fog:!0,depthWrite:!0})),a=new N(r*.62,r);a.translate(0,r/2,0);let o=a.clone();o.rotateY(Math.PI/2);let s=ma([a,o]),c=[[],[],[]];e.forEach((e,t)=>c[t%3].push(e));let l=new Tt,u=new R;return c.forEach((e,t)=>{if(!e.length)return;let n=new ft(s,i[t],e.length);e.forEach((e,t)=>{l.position.set(e[0],0,e[1]),l.rotation.y=t*2.1%6.28;let r=.75+t%5*.12;l.scale.set(r,r,r),l.updateMatrix(),n.setMatrixAt(t,l.matrix)}),n.frustumCulled=!1,u.add(n)}),this.g.add(u),u}lampPoints(e,t=16756832,n=26){n*=.5;let r=new wt,a=[];for(let t of e)a.push(t[0],8.5,t[1]);r.setAttribute(`position`,new lt(a,3));let o=new Ge({map:ze(`#ffffff`),color:t,size:n,transparent:!0,depthWrite:!1,blending:2,sizeAttenuation:!0}),s=new i(r,o);return s.frustumCulled=!1,this.g.add(s),s}style(e){let t=this.s.mat.uniforms;for(let n of[`fog`,`sky`,`sun`,`base`])e[n]&&t[`u`+n[0].toUpperCase()+n.slice(1)].value.set(e[n]);e.fogD!=null&&(t.uFogD.value=e.fogD,this.fogObj.density=e.fogD),e.fog&&this.fogObj.color.set(e.fog),e.lit!=null&&(t.uLit.value=e.lit),e.snow!=null&&(t.uSnow.value=e.snow),e.win!=null&&(t.uWin.value=e.win),e.sunDir&&t.uSunDir.value.set(...e.sunDir).normalize(),e.road&&this.sMat.color.set(e.road),e.walk&&this.wMat.color.set(e.walk),e.ground&&this.gMat.color.set(e.ground),e.park&&this.pMat.color.set(e.park),e.water&&this.rMat.color.set(e.water),e.bank&&(this.bankMat.color.set(e.bank),this.bridgeMat.color.set(e.bank))}sample(e){let t=[];for(let n of e)for(let e=0;e<n.length-1;e++){let r=n[e],i=n[e+1],a=Math.hypot(i[0]-r[0],i[1]-r[1]),o=Math.max(1,a/32|0);for(let e=0;e<o;e++){let n=e/o,s=(i[1]-r[1])/a,c=-(i[0]-r[0])/a,l=(e%2?1:-1)*11;t.push([r[0]+(i[0]-r[0])*n+s*l,r[1]+(i[1]-r[1])*n+c*l])}}return t}},wa=class{constructor(e,t,n=120,{color:r=526346,spd:i=1.2,scale:a=1}={}){let o=new u(.24,1.02,3,8);o.translate(0,.82,0);let s=new b(.13,10,8);s.translate(0,1.62,0);let c=ma([o.toNonIndexed(),s.toNonIndexed()]);this.m=new ft(c,new At({color:r,roughness:1}),n),this.m.frustumCulled=!1,e.add(this.m),this.d=new Tt,this.a=[];let l=z(9);this.scale=a;for(let e=0;e<n;e++){let e=t[l()*t.length|0];this.a.push({p:e,i:l()*(e.length-1),off:(l()-.5)*6,s:i*(.75+l()*.5)*(l()<.5?1:-1),f:.9+l()*.15})}}update(e,t){let{d:n,m:r}=this;this.a.forEach((i,a)=>{i.i+=i.s*e/Math.max(1,this.len(i)),i.i<0&&(i.i+=i.p.length-1.01),i.i>=i.p.length-1&&(i.i=0);let o=i.i|0,s=i.i-o,c=i.p[o],l=i.p[o+1]||c,u=l[1]-c[1],d=-(l[0]-c[0]),f=Math.hypot(u,d)||1;n.position.set(c[0]+(l[0]-c[0])*s+u/f*i.off,0,c[1]+(l[1]-c[1])*s+d/f*i.off),n.rotation.y=Math.atan2(l[0]-c[0],l[1]-c[1])+(i.s<0?Math.PI:0),n.scale.setScalar(i.f*this.scale),n.position.y=Math.abs(Math.sin(t*5+a))*.03,n.updateMatrix(),r.setMatrixAt(a,n.matrix)}),r.instanceMatrix.needsUpdate=!0}len(e){let t=e.i|0,n=e.p[t],r=e.p[t+1]||n;return Math.hypot(r[0]-n[0],r[1]-n[1])||1}};async function Ta(e){if(e.city)return e.city;e.hud.status(`도시를 세우는 중`);let t=await _a();return await new Promise(e=>setTimeout(e,30)),e.city=new Ca(t),e.hud.status(``),e.city}var Ea=(e,t,n)=>({g:`A`,pos:e,t,r:n}),Da=(e,t,n)=>({g:`B`,pos:e,t,r:n}),Oa=(e,t,n)=>({g:`C`,pos:e,t,r:n}),ka=(e,t,n)=>({g:`D`,pos:e,t,r:n}),Aa=`modulepreload`,ja=function(e,t){return new URL(e,t).href},Ma={},Na=function(e){return e.pathname.endsWith(`.css`)},Pa=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Fa=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=ja(t,n);let r=s(t),i=Na(r);return Pa(Ma,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Aa,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};async function Ia(e){let{e:t,a:n}=e,i=await Ta(e),a=new r;a.background=new U(197380),a.add(i.g),a.fog=i.fogObj;let o=new rt(9080726,1052687,.05);a.add(o),i.style({fog:328966,fogD:.006,sky:[.012,.013,.015],sun:[0,0,0],lit:.05,snow:0,road:1842206,walk:2500132,ground:855309,park:658185,bank:1381652,win:1});let s=i.data.route,c=new G(s[2]+3,1.7,s[3]+42),l=new G(s[4]-12,6,s[5]-160),u=await Fa(()=>import(`./tex-CMD4e85i.js`).then(e=>e.g),__vite__mapDeps([0,1]),import.meta.url),d=new R;for(let e=0;e<16;e++){let t=new H(new N(9+e%3*4,3+e%2*2),new V({map:u.soft(`#e8b25a`),transparent:!0,opacity:.34,depthWrite:!1,blending:2}));t.rotation.x=-Math.PI/2,t.position.set(c.x+(e%2?9:-9)+e%3,.2,c.z-16-e*22),d.add(t)}a.add(d);let f=new E(new oe({map:(await Fa(async()=>{let{soft:e}=await import(`./tex-CMD4e85i.js`).then(e=>e.g);return{soft:e}},__vite__mapDeps([0,1]),import.meta.url)).soft(`#fff2c8`),transparent:!0,opacity:0,depthWrite:!1,blending:2}));f.scale.setScalar(52),f.position.copy(l).add(new G(30,120,-260)),a.add(f);let p=0,m={scene:a,fov:50,imagineAll:!0,post:{grain:.08,vig:.7,sat:.5,bloom:.5},panel:[[`그 시절에는 모든 일이 어둠 속에서 벌어졌다.`,`¶1`],[`태양은 고작 60와트 전구 하나를 켜놓은 정도의 밝기였다.`,`¶1`]],marks:[],update(e){p+=e;let n=Math.max(0,Math.sin(Math.min(p/24,1)*Math.PI));t.camera.position.copy(c),t.camera.lookAt(l),o.intensity=.05+n*.7,f.material.opacity=n*.55,i.style({sky:[.012+n*.05,.013+n*.05,.015+n*.05],lit:.05+(1-n)*.14,fog:new U(.018+n*.09,.02+n*.09,.022+n*.09)})}};n.loop(`wind`,{type:`brown`,freq:280,gain:.1}),e.sfx(`먼 바람과 전차 선로의 낮은 울림`,5),await e.enter(m,{fade:3}),await e.wait(2.5),await e.say(`그 시절에는 모든 일이 어둠 속에서 벌어졌다.`,{ref:`¶1`,quote:!0}),await e.wait(5),await e.say(`태양은 고작 60와트 전구 하나를 켜놓은 정도의 밝기였다.`,{ref:`¶1`,quote:!0}),await e.wait(9),await e.say(`1981년 12월, 바르샤바.`,{ref:`¶1, 각주 1`}),await e.leave(2),a.remove(i.g)}var La=e({breath:()=>Ja,dust:()=>Xa}),J=(e,t={})=>new At({color:e,roughness:.85,...t}),Y=(e,t,n,r,i=0,a=0,o=0)=>{let s=new H(new ce(e,t,n),r);return s.position.set(i,a,o),s.castShadow=!1,s},Ra=(e,t,n,r=0,i=0,a=0,o=14,s=e)=>{let c=new H(new y(s,e,t,o),n);return c.position.set(r,i,a),c},X=(e,t,n,r=0,i=0,a=0,o=0,s=0)=>{let c=new H(new N(e,t),n);return c.position.set(r,i,a),c.rotation.set(s,o,0),c},za=(e,t,n,r={})=>(e.userData.hot={label:t,use:n,...r},e);new V({visible:!1});function Ba(e,t,n,r,i,a,o,s,c){let l=Y(e,t,n,new V({transparent:!0,opacity:0,depthWrite:!1}),r,i,a);return za(l,o,s,c),l}function Va(e,t,n,{wall:r,floor:i,ceil:a=J(7105122),open:o={}}={}){let s=new R,c=X(e,t,i,0,0,0,0,-Math.PI/2),l=X(e,t,a,0,n,0,0,Math.PI/2);s.add(c,l),s.floorMesh=c;let u=[[0,-t/2,0,e,`n`],[0,t/2,Math.PI,e,`s`],[-e/2,0,Math.PI/2,t,`w`],[e/2,0,-Math.PI/2,t,`e`]];for(let[e,t,i,a,c]of u){if(o[c])continue;let l=r.clone();l.map&&(l.map=l.map.clone(),l.map.repeat.set(a/3.6,1),l.map.needsUpdate=!0),s.add(X(a,n,l,e,n/2,t,i))}return s}function Ha(e,t,n,{len:r=1.3,color:i=13620932,i:a=1.6,dist:o=7}={}){let s=new R;s.add(Y(r,.05,.12,new V({color:new U(i).multiplyScalar(1.35)}))),s.position.set(e,t,n);let c=new Je(i,a,o,1.6);return c.position.y=-.15,s.add(c),s.light=c,s}function Ua(e,t,n,r=0,i=1.4){let a=new R,o=J(8091238,{roughness:.6}),s=i/.09|0;for(let e=0;e<s;e++)a.add(Y(.05,.62,.1,o,e*.09-i/2,.36,0));return a.add(Y(i,.03,.03,o,0,.12,0),Y(i,.03,.03,o,0,.6,0)),a.position.set(e,t,n),a.rotation.y=r,a}function Wa(e=1.6,t=.7,n=.74,{top:r=J(6969924),leg:i=J(3486252,{metalness:.3})}={}){let a=new R;a.add(Y(e,.04,t,r,0,n,0));for(let[r,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])a.add(Y(.04,n,.04,i,r*(e/2-.05),n/2,o*(t/2-.05)));return a}function Ga(e=15525590,t=!0){let n=new R;n.add(Ra(.035,.055,J(e,{roughness:.3}),0,.03,0,16,.045)),t&&n.add(Ra(.0465,.004,J(13214282,{metalness:.8,roughness:.3}),0,.058,0,16));let r=Ra(.07,.008,J(e,{roughness:.3}),0,.004,0,20);return n.add(r),n}function Ka({coat:e=1184276,skin:t=9143160,h:n=1.72,hat:r=null,bulk:i=1,hair:a=1380879}={}){let o=new R,s=J(e,{roughness:1}),c=J(t,{roughness:.9}),l=[[.05,0],[.3*i,.02],[.27*i,.5],[.24*i,.95],[.25*i,1.28],[.2*i,1.42],[.07,1.48]].map(e=>new L(e[0],e[1])),d=new H(new Oe(l,12),s);d.position.y=.12,o.add(d);let f=J(592138);o.add(Y(.11,.2,.13,f,-.1,.1,0),Y(.11,.2,.13,f,.1,.1,0));let p=new H(new b(.112,14,12),c);p.position.y=1.68,p.scale.set(.92,1.08,.98),o.add(p),o.head=p;let m=new H(new b(.118,14,10,0,6.3,0,1.45),J(a,{roughness:.8}));m.position.set(0,1.695,.012),m.rotation.x=-.28,o.add(m),o.hairCap=m;let h=e=>{let t=new R,n=new H(new u(.055,.5,3,8),s);n.position.y=-.3,t.add(n);let r=new H(new b(.05,8,8),c);return r.position.y=-.63,t.add(r),t.position.set(e*.27*i,1.46,0),t.rotation.z=e*.08,t};if(o.armL=h(-1),o.armR=h(1),o.add(o.armL,o.armR),o.scale.setScalar(n/1.8),r===`fur`){let e=Ra(.13,.1,J(2761243),0,1.8,0,14,.125);o.add(e)}if(r===`beret`){let e=new H(new b(.13,10,6),J(1513242));e.scale.y=.4,e.position.y=1.79,o.add(e)}return o}function qa(){let e=Ka({coat:1908504,h:1.6,bulk:.88,skin:11905950,hat:`fur`}),t=new H(new b(.15,14,10,0,6.3,0,1.7),J(3817521,{roughness:.6}));t.position.y=1.82,e.add(t),e.helmet=t,e.hairCap.visible=!1;let n=Ra(.27,.05,J(3812380),0,1,0,14);e.add(n);let r=J(9210500,{metalness:.8,roughness:.4});e.tins=[];for(let t=0;t<5;t++){let n=t*1.3-.4,i=Ra(.05,.09,r,Math.sin(n)*.28,.9,Math.cos(n)*.28,10);e.add(i),e.tins.push(i)}let i=new H(new me(.3,.025,6,20),J(3812380));return i.position.set(0,1.28,0),i.rotation.set(1.2,0,.7),e.add(i),e}function Ja(e,t){let n=new oe({map:ze(`#ffffff`),transparent:!0,opacity:0,depthWrite:!1}),r=new E(n);r.scale.setScalar(.2),e.add(r);let i=2;return e=>{i+=e;let a=i%3.4,o=a<1.3;if(n.opacity=o?.045*Math.sin(a/1.3*Math.PI):0,o){let e=t();r.position.copy(e).add(new G(0,a*.12,0)),r.scale.setScalar(.1+a*.16)}}}function Ya(e,t,n=14,{op:r=.16,size:i=4}={}){let a=new R,o=[],s=z(3);for(let e=0;e<n;e++){let e=new oe({map:st(),transparent:!0,opacity:r*(.4+s()*.6),depthWrite:!1,color:12434864}),n=new E(e);n.position.set(t[0]+s()*(t[1]-t[0]),t[2]+s()*(t[3]-t[2]),t[4]+s()*(t[5]-t[4])),n.scale.setScalar(i*(.7+s())),a.add(n),o.push({s:n,v:(s()-.5)*.08})}return e.add(a),e=>{for(let n of o)n.s.position.x+=n.v*e*4,n.s.material.rotation+=n.v*e,n.s.position.x>t[1]&&(n.s.position.x=t[0]),n.s.position.x<t[0]&&(n.s.position.x=t[1])}}function Xa(e,t,n=240,r=16777215,a=.05,o=.5,c=.05){let l=z(5),u=new Float32Array(n*3);for(let e=0;e<n;e++)u[e*3]=t[0]+l()*(t[1]-t[0]),u[e*3+1]=t[2]+l()*(t[3]-t[2]),u[e*3+2]=t[4]+l()*(t[5]-t[4]);let d=new wt;d.setAttribute(`position`,new s(u,3));let f=new Ge({color:r,size:a,transparent:!0,opacity:o,depthWrite:!1,map:ze(`#ffffff`,32)}),p=new i(d,f);return p.frustumCulled=!1,e.add(p),e=>{for(let n=1;n<u.length;n+=3)u[n]-=c*e*(1+n%7*.2),u[n-1]+=Math.sin(n+u[n])*e*c*.5,u[n]<t[2]&&(u[n]=t[3]);d.attributes.position.needsUpdate=!0}}var Z=[0,3.6,7.2];function Za(e,{night:t=!1}={}){let n=new r;n.background=new U(t?131844:460810),n.fog=new _e(2368543,.022);let i=J(8025968,{map:ut([6,2]),roughness:.75}),a=J(7631210),o=()=>J(16777215,{map:je(),roughness:.55}),s=new R;n.add(s);let c=[],l=[],u=[];for(let e=0;e<3;e++){let n=Z[e],r=Va(40,3,3.3,{wall:o(),floor:i,ceil:a,open:e==1?{n:!0}:e==2?{s:!0,e:!0}:{}});r.position.set(0,n,0),s.add(r),u.push(r.floorMesh);let c=(e,t,r)=>s.add(X(e,3.3,o(),t,n+1.65,r,r>0?Math.PI:0));e==1&&(c(5,-17.5,-1.5),c(13,13.5,-1.5)),e==2&&(c(4,-18,1.5),c(20,10,1.5));for(let e=-16;e<=16;e+=t?16:8){let r=Ha(e,n+3.25,0,{i:t?1.2:3.4,dist:11});s.add(r),l.push(r)}}let d=Va(16,9.5,3.3,{wall:o(),floor:J(7169884,{map:Ye([6,5])}),ceil:a,open:{n:!0,s:!0}});d.position.set(-8,Z[2],6.25),s.add(d),u.push(d.floorMesh),s.add(Y(16,1.1,.2,J(12038298),-8,Z[2]+.55,11),Y(16,.4,.2,J(12038298),-8,Z[2]+3.1,11));for(let e=0;e<5;e++)s.add(Y(.5,1.9,.2,J(12038298),-16+e*4,Z[2]+2,11));for(let e=0;e<4;e++){let t=X(3.5,1.9,new At({color:2106408,roughness:.1,metalness:.3,transparent:!0,opacity:.5}),-14+e*4,Z[2]+2,11,Math.PI);s.add(t)}let f=new R,p=J(t?395018:1776928);for(let e=0;e<7;e++){let t=14+e*7%10,n=14+e*5%16,r=Y(t,n,10,p,-30+e*17,Z[2]+n/2-6,42+e*3%14);f.add(r);for(let i=0;i<9;i++){let a=new H(new N(.9,1.2),new V({color:12947269}));a.position.set(r.position.x-t/2+1+i*37%(t-2),Z[2]-5+i*53%(n-2),r.position.z-5.05),a.rotation.y=Math.PI,(i+e)%3==0&&f.add(a)}}for(let e=0;e<9;e++){let t=new H(new N(8,14),new V({map:xt(e+40),transparent:!0,alphaTest:.4,side:2}));t.position.set(-30+e*7,Z[2]-1,22+e%3*4),f.add(t)}let m=X(120,120,J(5196354,{map:Qe([9,9]),color:8222828}),0,Z[2]-8,50,0,-Math.PI/2);f.add(m),s.add(f);let h=X(180,60,new V({color:t?329224:2369322,fog:!1}),0,Z[2]+6,70,Math.PI);s.add(h),s.add(Ua(-9,Z[2],10.75,Math.PI,2.6));for(let e of[-13,-8,-3])for(let n of[3.5,7.5]){let r=Ha(e,Z[2]+3.25,n,{i:t?.8:2.2,dist:11});s.add(r),l.push(r)}n.add(new rt(11053206,4538426,t?.4:.95));let g=[],_=J(3820602,{roughness:1}),v=J(5978666,{roughness:1});for(let e=0;e<8;e++){let t=-14+e%4*4,n=4+(e/4|0)*3.2,r=Wa(2,.9,.72);if(r.position.set(t,Z[2],n),s.add(r),e!=6){let r=Y(1.8,.14,.72,e%2?_:v,t,Z[2]+.82,n);s.add(r),g.push(r)}}let y=Wa(2,.9,.72);y.position.set(-9,Z[2],9.6),s.add(y),s.add(Y(1.8,.14,.72,_,-9,Z[2]+.82,9.6));let b=Y(.16,.03,.22,J(6958885),-8.6,Z[2]+.91,9.5);s.add(b);let x=Va(4.5,3,3.3,{wall:J(16777215,{map:je(`#a7a18c`,`#5a5f4d`),roughness:.5}),floor:i,ceil:a,open:{w:!0}});x.position.set(22.25,Z[2],0),s.add(x),s.add(Y(.05,2,1.2,J(4868668),22,Z[2]+1,.9),Y(.05,2,1.2,J(4868668),23.4,Z[2]+1,.9));let S=Ha(22,Z[2]+3.2,0,{i:.7,dist:5});s.add(S);let C=Va(22,12.5,4.2,{wall:o(),floor:i,ceil:a,open:{s:!0}});C.position.set(-4,Z[1],-7.75),s.add(C),u.push(C.floorMesh);for(let e=-11;e<=3;e+=7)for(let n of[-5,-11]){let r=Ha(e,Z[1]+4.1,n,{i:t?1:1.7,dist:12});s.add(r)}s.add(Y(6,.5,2.4,J(4864554,{map:kt()}),-4,Z[1]+.25,-12.7));let w=Y(.8,1.1,.5,J(3811869),-4,Z[1]+1.05,-12.6);s.add(w);let T=[],E=(e,t,n,r,i,a,o={})=>{let c=z(e*7+t|0);for(let l=0;l<e;l++){let e=Ka({coat:[1315862,1709842,1053976,1841688][l%4],h:1.62+c()*.2,skin:4867648,...o});e.position.set(t+c()*(n-t),a,r+c()*(i-r)),e.rotation.y=c()*6.3,e.ph=c()*6,s.add(e),T.push(e)}};if(!t){E(26,-13,5,-11,-3,Z[1]);for(let e of T)e.rotation.y=Math.PI;E(11,-14,14,-1,1,Z[1]),E(5,-3,-1,-1,1,Z[0])}let D=X(3,1.5,J(16777215,{map:pt(6)}),15.5,Z[1]+1.7,-1.46,0);s.add(Y(3.1,1.6,.03,J(3811869),15.5,Z[1]+1.7,-1.49),D);let O=Y(1.9,2.4,.08,J(3811869,{map:kt()}),-19.9,Z[0]+1.2,0);O.rotation.y=Math.PI/2,s.add(O);let k=Wa(1.3,.6,.8);k.position.set(-17.3,Z[0],-1),s.add(k);let A=Ka({coat:1843236,skin:4867648});A.position.set(-17.3,Z[0],-1.35),s.add(A);let j=Y(.4,.55,.16,J(2829101),4,Z[0]+1.45,-1.42),M=Y(.4,.55,.16,J(2829101),6.6,Z[0]+1.45,-1.42);s.add(j,M),t||E(7,3,10,-1.3,-.6,Z[0]),s.add(Y(.08,2.3,1.3,J(2893344,{map:kt(`#2c2620`)}),19.9,Z[1]+1.15,0)),s.add(Y(4,1,.5,J(5982773),14,Z[0]+.5,1.15));let ee=Ka({coat:9078392,skin:4867648});ee.position.set(14,Z[0],1.3),s.add(ee);let te=Wa(2.7,1.5,.76,{top:J(2637882)});te.position.set(-7,Z[0],-.55),s.add(te);let ne=Va(7,2.6,2.5,{wall:o(),floor:i,ceil:a});ne.position.set(34,Z[0]+1.8,0),s.add(ne),s.add(Y(.9,2.3,.05,J(657931),37.45,Z[0]+2.95,0));let re=new Je(12170383,.8,5,1.8);re.position.set(32,Z[0]+3.9,0),s.add(re);let ie=[Ea([-9,Z[2]+1.2,9.6],`라디에이터 옆 탁자 ¶67`,8),Ea([0,Z[0]+.1,-.5],`콘크리트 바닥 ¶69`,7),Oa([-2,Z[2]+2.4,11],`창밖 아파트의 배치`,10),Da([0,Z[1]+2.5,-1.5],`스타프키의 학교 건물 [S40]. 실내 구조는 상상`,16),Ea([5,Z[0]+1.7,-1.2],`공중전화 두 대 ¶67`,8),Ea([23,Z[2]+2,-1.4],`벗겨진 유성페인트 ¶69`,7)],ae=[{p:[0,Z[0]+1.5,0],d:40},{p:[0,Z[1]+1.5,0],d:40},{p:[0,Z[2]+1.5,0],d:40},{p:[-8,Z[2]+1.5,6],d:12}],P={0:[[-19.3,19.3,-1.3,1.3]],1:[[-19.3,19.3,-1.3,1.3],[-14.6,6.6,-13,-1.2]],2:[[-19.3,24,-1.2,1.2],[-15.6,-.5,1.1,10.4]]},oe=[[-10.15,-7.85,9.05,10.15,Z[2],Z[2]+3],[-8.4,-5.6,-1.35,.25,Z[0],Z[0]+3],[-18,-16.6,-1.4,-.6,Z[0],Z[0]+3],[12,16,.8,1.5,Z[0],Z[0]+3],[-7.2,-.8,-13.9,-11.5,Z[1],Z[1]+3]];for(let e=0;e<8;e++){if(e==6)continue;let t=-14+e%4*4,n=4+(e/4|0)*3.2;oe.push([t-1.1,t+1.1,n-.55,n+.55,Z[2],Z[2]+3])}s.updateMatrixWorld(!0);let se=[],ce=[];s.traverse(e=>{if(e.isPointLight){let t=new G;e.getWorldPosition(t),se.push({p:t,i:e.intensity,d:e.distance,c:e.color.clone()}),ce.push(e)}}),ce.forEach(e=>e.parent.remove(e));let le=[];for(let e=0;e<7;e++){let e=new Je(16777215,0,8,1.6);n.add(e),le.push(e)}return{s:n,g:s,hots:c,F:Z,nav:P,blocks:oe,relight:(e,t=1)=>{let n=se.map(t=>({q:t,k:t.p.distanceTo(e)+(Math.abs(t.p.y-e.y)>2.6?30:0)})).sort((e,t)=>e.k-t.k);le.forEach((e,r)=>{let i=n[r].q;e.position.copy(i.p),e.intensity=i.i*t*1.25,e.distance=i.d*1.2,e.color.copy(i.c)})},marks:ie,imagined:ae,walkMeshes:u,silh:T,door:O,ph1:j,ph2:M,book:b,duty:k,cook:ee,lights:l}}async function Qa(e){let{e:t,a:n,hud:r}=e,i=Za(e),{s:a,g:o,F:s,nav:c,silh:l,door:u}=i,d=t.controls,f=[Ya(a,[-19,19,s[1]+1.2,s[1]+3,-1.3,1.3],16,{op:.16,size:3}),Ya(a,[-14,6,s[1]+1.5,s[1]+4,-13,-2],16,{op:.14,size:6}),Ya(a,[-19,19,s[0]+1.2,s[0]+3,-1.3,1.3],6,{op:.1,size:3}),Xa(a,[-15,0,s[2]+.2,s[2]+3,1.5,10],160,16773328,.02,.3,.02)],p=()=>d.pos.y>s[2]-1?2:+(d.pos.y>s[1]-1),m=(e,t=null,n=null)=>{d.pos.y=s[e],d.nav=c[e],t!=null&&(d.pos.x=t,d.pos.z=n)},h={scene:a,fov:62,post:{grain:.04,vig:.5,sat:.62,tint:[1,.98,.9],bloom:.3,exposure:1.05},hots:i.hots,marks:i.marks,imagineAll:!0,panel:[[`우리의 파업은, 그러니까 변두리의 저항이었다.`,`¶11`],[`끝없는 순환이 이어졌다.`,`¶71`],[`그 차갑고 거친 바닥은 오래전, 이 심리학부 건물에 게슈타포 본부가 들어서던 시절에 깔린 것이었다.`,`¶69`]],update(e,r){if(i.relight(t.camera.position),f.forEach(t=>t(e)),d.mode===`walk`&&!d.lockMove)for(let t of l){if(Math.abs(t.position.y-d.pos.y)>.5)continue;let n=d.pos.x-t.position.x,r=d.pos.z-t.position.z,i=Math.hypot(n,r);if(i<.72&&i>.01){let t=d.pos.x+n/i*e*1.5,a=d.pos.z+r/i*e*1.5;d.inside(t,d.pos.z)&&(d.pos.x=t),d.inside(d.pos.x,a)&&(d.pos.z=a)}}for(let e of l)e.children[0].position.y=.12+Math.sin(r*1.3+e.ph)*.006,e.rotation.y+=Math.sin(r*.4+e.ph)*.0012;let a=p();n.set(`murmur`,{gain:a==1?.12:a==0?.09:.05}),n.set(`hum`,{gain:.03})}};t.floorPick=i.walkMeshes;let g=(e,t,n,r,i,a,s,c,l)=>{let u=Ba(e,t,n,r,i,a,s,c,l);return o.add(u),h.hots.push(u),u};d.mode=`walk`,d.surface=`concrete`,d.speed=1.9,d.place(-8,s[2],8.4,0,0),d.nav=c[2],d.blocks=i.blocks,n.loop(`hum`,{type:`white`,freq:120,q:12,filter:`bandpass`,gain:.03}),n.loop(`murmur`,{type:`brown`,freq:650,q:.6,gain:.05,lfo:.25,lfoDepth:.015}),n.muffledBeat(.05);let _=setInterval(()=>{p()==0&&Math.random()<.8&&n.ping()},640),v=setInterval(()=>{Math.random()<.4&&n.guitar()},9e3);await e.enter(h),r.showTools(!0),e.hint(`W A S D 또는 바닥 클릭으로 걷기 · 끌기 또는 Z C로 돌기 · E 또는 클릭으로 하기`),await e.say(`스타프키 거리, 심리학부. 우리는 탁자 위에서 잤다.`,{ref:`¶5, ¶11`}),e.sfx(`벽 너머의 먹먹한 음악, 탁구공, 낮은 웅성거림`,6);let y=[],b=!1,x=new Set,S=0,C=[`table`,`wc`,`hall`,`phone`,`bar`],w={table:[`《돌차기 놀이》를 또 펼쳤다. 사건들의 순서가 늘 일정할 필요는 없다.`,`¶71`],wc:[`벗겨진 유성페인트를 멍하니 바라보았다. 문고리를 잡아당기는 소리가 나면 숨을 죽였다.`,`¶69`],hall:[`표결. 위원장의 나무 굽이 콘크리트 바닥을 쿵쿵 울린다.`,`¶69`],phone:[`줄을 선다. 엄마는 주문이라도 외듯이 같은 말을 되풀이했다. 집으로 돌아와라.`,`¶67`],bar:[`줄을 포기하고 매점으로 갔다가, 다시 돌아와 줄을 선다.`,`¶71`]},T=t=>async()=>{if(x.add(t),e.say(w[t][0],{ref:w[t][1]}),t===`hall`&&(n.hit({freq:200,q:1,dur:.12,gain:.25,type:`brown`}),n.hit({freq:200,q:1,dur:.12,gain:.25,type:`brown`,when:.5})),t===`phone`&&n.beep({freq:425,dur:.3,gain:.04}),x.size>=C.length){S++,x.clear();for(let e of Object.values(E))e.userData.hot.on=!0;O()}else y.push(setTimeout(()=>{b||(E[t].userData.hot.on=!0)},15e3/(e.auto?100:1)))},E={table:g(2,1,1,-9,s[2]+1,9.6,`내 탁자에 눕는다`,T(`table`)),wc:g(1,2,2.4,23.6,s[2]+1.2,0,`화장실 칸에 앉는다`,T(`wc`)),hall:g(3,2,3,-4,s[1]+1.2,-9,`강당에서 손을 든다`,T(`hall`),{range:7}),phone:g(3.4,1.6,.6,5.2,s[0]+1.3,-1.1,`전화 줄에 선다`,T(`phone`)),bar:g(2,1,1,14,s[0]+1,.9,`매점으로 간다`,T(`bar`))},D=(t,i)=>async()=>{d.lockMove=!0,await r.fade(!0,e.auto?.02:.45),n.step(`stair`),n.step(`stair`),t+i==1&&(d.pos.set(31.2,s[0]+1.8,0),d.yaw=-Math.PI/2,d.pitch=0,await r.fade(!1,e.auto?.02:.35),e.sfx(`어두운 층계참, 짧은 복도`,2),await e.wait(1.3),n.step(`stair`),await r.fade(!0,e.auto?.02:.35)),m(i,12.2,0),d.yaw=t<i?-Math.PI/2:Math.PI/2,await r.fade(!1,e.auto?.02:.5),d.lockMove=!1};for(let e=0;e<3;e++){let t=Y(1.4,2.5,.1,J(723724),11.3,s[e]+1.25,-1.44);o.add(t),e<2&&g(1.4,2.5,.3,11.3,s[e]+1.25,-1.3,e==0?`위층으로 (층계참을 지나)`:`맨 위층으로`,D(e,e+1),{once:!1,range:2.4}),e>0&&g(1.4,2.5,.3,13,s[e]+1.25,-1.3,e==1?`아래층으로`:`아래층으로 (강당 층)`,D(e,e-1),{once:!1,range:2.4}),o.add(Y(1.4,2.5,.1,J(723724),13,s[e]+1.25,-1.44))}let O=async()=>{S==1&&(await e.wait(3),await e.say(`다른 사람들도 나처럼 하고 있다는 느낌이 들었다.`,{ref:`¶71`,quote:!0}))};e.auto&&(S=1);let k={table:`내 탁자 (맨 위층 강의실)`,wc:`화장실 (맨 위층 동쪽 끝)`,hall:`강당 (가운데 층)`,phone:`전화 줄 (지상층)`,bar:`매점 (지상층)`},A=setInterval(()=>{if(S>=1)return;let t=C.filter(e=>!x.has(e)).map(e=>k[e]);e.hint(innerWidth<640?`남은 곳 `+t.length+`개. 계단은 복도 동쪽`:`남은 순환: `+t.join(` · `)+`  |  계단은 복도 동쪽`)},800);await e.walkUntil(()=>S>=1,{after:240,fn:()=>{S=1,O()}}),clearInterval(A),b=!0,y.forEach(clearTimeout);for(let e of Object.values(E))e.userData.hot.on=!1;await e.wait(e.auto?1:6),m(1,-4,-4),d.yaw=0,d.target=null,await e.say(`강당 집회. 파업 중인 자원봉사자에게 외출증을 나누어 준다.`,{ref:`¶5`}),n.clink(),await e.wait(1),await e.say(`명단에 내 이름이 있다. 아래층 문으로 간다.`,{ref:`¶5`}),m(0,12.2,0),d.yaw=Math.PI/2,e.hint(`지상층 서쪽 끝, 당직자에게 간다`);let j=g(1.6,2,2,-17.7,s[0]+1.2,0,`당직자에게 외출증을 보인다`,null,{range:2.8});await e.until(j,{timeout:90}),n.hit({freq:1600,q:3,dur:.05,gain:.2}),await e.wait(.3),n.hit({freq:900,q:4,dur:.12,gain:.25}),n.stopBeat(),clearInterval(_),clearInterval(v),await e.say(`당직자가 명부에서 내 이름을 확인하고 열쇠로 문을 열었다.`,{ref:`¶5`}),d.lockMove=!0,n.stop(`murmur`,.2),n.stop(`hum`,.2),await r.fade(!0,e.auto?.02:.2),e.dispose(),await to(e)}var $a=[[`창 너머 도시는 점점 어두워졌고, 유리창에는 서늘한 빛이 번들거렸다.`,`¶73`],[`그때 내게 필요했던 건 부드러움이었다.`,`¶75`],[`날마다 탁자 위에서 자는 바람에 뼈마디가 쑤셨다.`,`¶75 줄임`],[`겉보기에는 아무것도 달라지지 않는 듯했다.`,`¶107`]];async function eo(e,t){let{e:n,a:r}=e,i=Za(e),{s:a,F:o}=i,s=n.controls;s.mode=`look`,s.pos.set(-9,o[2]+1.12,9.55),s.yaw=Math.PI,s.pitch=.1,s.limit=[Math.PI-1.3,Math.PI+1.3,-.2,.6];let c={scene:a,fov:62,hots:[],imagineAll:!0,marks:i.marks,post:{grain:.04,vig:.55,sat:.6,tint:[1,.98,.9],bloom:.3,exposure:.9},panel:[[`라디에이터 옆, 침낭을 덮어놓은 탁자`,`¶73`]],update(){i.relight(n.camera.position)}};r.loop(`hum`,{type:`white`,freq:120,q:12,filter:`bandpass`,gain:.025}),r.loop(`murmur`,{type:`brown`,freq:500,gain:.04}),await e.enter(c,{fade:.9}),e.hint(``);let l=$a[t%$a.length];await e.say(l[0],{ref:l[1],quote:!l[1].includes(`줄임`)})}async function to(e){let{e:t,a:n}=e,i=new r;i.background=new U(790033),i.fog=new _e(1119258,.09),i.add(new rt(4739164,2105374,.7));let a=X(60,60,J(16777215,{map:Qe([10,10]),color:7633538}),0,0,0,0,-Math.PI/2);i.add(a);for(let e=0;e<14;e++){let t=new H(new N(6,10),new V({map:xt(e+60),transparent:!0,alphaTest:.4,side:2}));t.position.set(-16+e*7%32,5,-16+e*11%22),i.add(t)}let o=Y(.08,3.6,.08,J(546),3,1.8,-5),s=new Je(16767392,3,14,1.8);s.position.set(3,3.5,-5);let c=new E(new oe({map:ze(`#ffd9a0`),transparent:!0,opacity:.6,depthWrite:!1,blending:2}));c.scale.setScalar(1.8),c.position.copy(s.position),i.add(o,s,c);for(let e=0;e<5;e++)i.add(Y(.05,.5,.05,J(3355439),-4+e*.5,.3,-3));i.add(Y(2.2,.04,.05,J(3355439),-3,.5,-3));let l=Y(30,14,1,J(2434602),0,7,8);i.add(l);let u=[(await Fa(async()=>{let{dust:e}=await Promise.resolve().then(()=>La);return{dust:e}},void 0,import.meta.url)).dust(i,[-14,14,0,8,-14,6],300,16777215,.035,.7,.28)][0],d=(await Fa(async()=>{let{breath:e}=await Promise.resolve().then(()=>La);return{breath:e}},void 0,import.meta.url)).breath(i,()=>t.camera.position.clone().add(t.camera.getWorldDirection(new G).multiplyScalar(.5)).add(new G(0,-.15,0))),f={scene:i,fov:60,post:{grain:.05,vig:.5,sat:.5,bloom:.5},imagineAll:!0,marks:[ka([3,3,-5],`뜨락의 모습은 상상. 고요는 ¶5`,12)],panel:[[`매섭게 얼어붙은 공기 속으로 나서는 순간, 불현듯 고요가 찾아왔다.`,`¶5`]],update(e){u(e),d(e)}},p=t.controls;p.mode=`look`,p.pos.set(0,1.62,4),p.yaw=0,p.pitch=.03,p.limit=[-.9,.9,-.4,.4],n.loop(`cold`,{type:`brown`,freq:180,gain:.035}),e.sfx(`고요. 눈 내리는 소리조차 없다`,5),await e.enter(f,{fade:1}),await e.wait(2),await e.say(`불현듯 고요가 찾아왔다.`,{ref:`¶5`,quote:!0}),await e.say(`나의 환자들은 나의 구원자였다.`,{ref:`¶7`,quote:!0}),await e.wait(2),await e.leave(1.6)}var no=[{id:`stawki`,label:`스타프키`,name:`스타프키 거리 심리학부`,pl:`ul. Stawki`,at:`stawki`,g:`A`,desc:`서술자가 파업 농성을 하던 건물. 역사의 중심에서 멀리 떨어진 변두리.`,q:[[`우리의 파업은, 그러니까 변두리의 저항이었다.`,`¶11`],[`그 차갑고 거친 바닥은 오래전, 이 심리학부 건물에 게슈타포 본부가 들어서던 시절에 깔린 것이었다.`,`¶69`]],scenes:[[`strike`,`농성장`],[`cyril`,`치릴의 밤`]]},{id:`zamenhofa`,label:`자멘호프`,name:`자멘호프 거리`,pl:`ul. Zamenhofa`,at:`zamenhofa`,g:`A`,desc:`서술자가 사는 옛 게토 구역. 기념비 근처에서 111번 버스를 기다린다.`,note:`기념비를 게토 영웅 기념비로 본 것은 추정(C)이다.`,q:[[`내가 게토구역에 있는 자멘호프 거리라고 대답하자`,`¶149`],[`나는 111번 버스가 서는 정류장으로 걸어갔다.`,`¶9`]],scenes:[[`stop`,`기념비 정류장`]]},{id:`univ`,label:`대학 정문`,name:`바르샤바 대학교 정문`,pl:`Krakowskie Przedmieście`,at:`univ`,g:`A`,desc:`파업 현수막과 불법 출판물 가판대로 들끓던 거리. 111번 버스가 지나간다.`,q:[[`붉은 글씨로 파업을 알리는 현수막이 바르샤바 대학교 정문과 철학부 건물 앞에 걸려 있었다.`,`¶11`],[`눈동자가 되어, 검고 투명한 동공이 되어 도시를 관망하며.`,`¶9`]],scenes:[[`ride`,`111번 버스`]]},{id:`tamka`,label:`탐카`,name:`탐카 거리, M의 빌라`,pl:`ul. Tamka`,at:`tamka`,g:`A`,desc:`상사 M이 2층에서 조직을 지휘하던 곳. 그는 창가에서 도시 전체를 내려다보았다.`,note:`빌라의 번지는 원문에 없다. 창에서 보는 조망은 연출(D)이다.`,q:[[`M은 탐카 거리에 있는 빌라 2층에서 우리를 지휘했지만`,`¶17`],[`창가에 서서 도시 전체를 내려다보던 M의 모습.`,`¶17`]],scenes:[[`mwindow`,`M의 창`]]},{id:`cafe`,label:`아마토르스카`,name:`아마토르스카 카페`,pl:`Nowy Świat × Al. Jerozolimskie`,at:`cafe`,g:`A`,desc:`체 게바라를 기다리던 거점. 노비시비아트 거리와 예로졸림스키에 대로가 만나는 모서리.`,q:[[`담배 연기가 자욱하고 겨울철엔 한낮에도 늘 어둑어둑한 그 카페의 구석 자리에서`,`¶19`],[`그 순간 그는 마치 극장 분장실에 들어온 배우처럼 보였다.`,`¶27`]],scenes:[[`cafe`,`체 게바라`]]},{id:`anna`,label:`안나의 집`,name:`블리클레 뒤 안뜰, 안나 아주머니의 집`,pl:`Nowy Świat · Blikle`,at:[-700,255],g:`C`,desc:`5층 집. 안나 아주머니는 레이스 커튼 너머로 노비시비아트 거리를 내다보았다.`,note:`대문 지점은 블리클레 과자점 위치에서 추정했다.`,q:[[`노비시비아트 거리에 있는 블리클레 과자점 뒤 첫 번째 대문, 넓은 안뜰`,`¶117`],[`이 높이에서는 구호를 읽을 수 없었고`,`¶157`]],scenes:[[`anna`,`안나 아주머니`]]},{id:`station`,label:`역`,name:`역 승강장`,pl:`추정: Warszawa Centralna`,at:`station`,g:`C`,desc:`이고르가 객차를 하나하나 세던 승강장. 다리를 건너 예로졸림스키에 대로를 지나 닿는다.`,note:`역 이름은 원문에 없다.`,q:[[`다리를 건너고 예로졸림스키에 대로를 지나서 역에 도착하면`,`¶79`],[`와, 바르스다!`,`¶81`]],scenes:[[`station`,`승강장`]]},{id:`saska`,label:`사스카켕파`,name:`사스카켕파`,pl:`Saska Kępa`,at:`saska`,g:`A`,desc:`강 건너 또 하나의 거점. 이고르가 사는 동네, 도시의 소음이 잦아드는 곳.`,q:[[`거기 도착하면 도시의 소음이 잦아들었고`,`¶13`],[`어두운 물이 무심하게 흐르는 비스와강`,`¶13`]],scenes:[[`igor`,`이고르`]]},{id:`bridge`,label:`다리와 대로`,name:`다리와 예로졸림스키에 대로`,pl:`Most Poniatowskiego · Al. Jerozolimskie`,at:`bridgeW`,g:`A`,desc:`일요일 아침, 서술자는 다리를 건너 도시 반대편으로 향한다. 그 아침에 무엇을 보는지는 장면에서 드러난다.`,note:`다리를 포니아토프스키 다리로 본 것은 추정(C)이다.`,q:[[`거리는 한산했다.`,`¶229`],[`나는 다리를 건너 도시 반대편으로 향했다.`,`¶231`]],scenes:[[`sunday`,`일요일 아침`]]},{id:`room`,label:`원룸`,name:`체 게바라의 원룸`,pl:`위치 미상`,at:`room`,g:`D-상상`,imagined:!0,desc:`신문지를 덧바른 문. 토요일 밤부터 일요일 새벽까지 공포가 옮아 붙는 방.`,note:`강 동쪽이라는 것만 추정(C)이고, 지점은 자료가 부족해 상상으로 채웠다.`,q:[[`신문지를 덧바른 문 뒤에서 그의 숨소리가 들려왔고`,`¶181`],[`그는 저들이 아침부터 자신을 감시하고 있다고 말했다.`,`¶189`]],scenes:[[`roomn`,`원룸의 밤`]]},{id:`kitchen`,label:`드레브니차`,name:`드레브니차의 부엌`,pl:`Drewnica`,offmap:!0,g:`C`,desc:`지도 밖의 작은 마을. 5월의 햇살이 비치던 부엌으로 시간이 잠시 빠져나간다.`,note:`마을 위치는 역자 각주에 기댄 추정이다.`,q:[[`작은 마을 위로 5월의 햇살이 환히 비치고`,`¶101`]],scenes:[[`kitchen`,`5월의 부엌`]]}],ro=[[`stawki`,`스타프키`,`농성장. 변두리의 저항 ¶11`,`A`],[`univ`,`대학 정문`,`모든 역사 ¶11`,`A`],[`cafe`,`아마토르스카`,`노비시비아트와 대로가 만나는 곳 ¶19`,`B`],[`tamka`,`탐카`,`M의 창 ¶17`,`A`],[`station`,`역`,`이고르 ¶79`,`C`],[`saska`,`사스카켕파`,`거점. 소음이 잦아드는 곳 ¶13`,`A`],[`zamenhofa`,`자멘호프`,`서술자의 집 ¶149`,`A`]];function io(e,t){let n=document.createElement(`canvas`);n.width=512,n.height=120;let r=n.getContext(`2d`);r.font=`600 44px "Apple SD Gothic Neo",sans-serif`,r.fillStyle=`#efe9da`,r.shadowColor=`#000`,r.shadowBlur=8,r.textAlign=`center`,r.fillText(e,256,46),r.font=`24px "Apple SD Gothic Neo",sans-serif`,r.fillStyle=`#b9b3a4`,r.fillText(t,256,92);let i=new f(n);i.colorSpace=ee;let a=new E(new oe({map:i,transparent:!0,depthTest:!1}));return a.renderOrder=9,a}async function ao(e,{onlyLook:t=!1}={}){let{e:n,a:i,hud:a}=e,o=await Ta(e),s=o.data,c=new r;c.background=new U(658447),c.add(o.g),c.fog=o.fogObj,c.add(new rt(12963030,3815732,1.9)),o.style({fog:855827,fogD:12e-5,sky:[.05,.055,.062],sun:[0,0,0],lit:.26,snow:.25,road:4868684,walk:5921110,ground:3749946,park:2895912,water:329739,bank:2499874,win:1});let l=[];for(let e=0;e<s.route.length;e+=2)l.push(new G(s.route[e],2.5,s.route[e+1]));let u=new H(new v(new M(l,!1,`catmullrom`,.01),700,6,5),new V({color:14239279}));c.add(u),s.anchors.bar=[s.anchors.univ[0]-70,s.anchors.univ[1]-55],s.anchors.donut=[-2896,-1105];let f=[];for(let[e,t,n]of[...ro,[`bar`,`바퀴벌레`,`분식집 ¶3. 위치는 상상`],[`donut`,`도넛 가게`,`마르흘레프스키 거리 ¶3. 지점은 상상`]]){let r=s.anchors[e],i=io(t,n);i.position.set(r[0],60,r[1]),i.center.set(.5,0),f.push(i),c.add(i);let a=new H(new y(1.6,1.6,60,6),new V({color:15722970}));a.position.set(r[0],30,r[1]),c.add(a)}let p=[];for(let e of[`Nowy Świat`,`Krakowskie Przedmieście`,`Aleje Jerozolimskie`,`Stawki`,`Saska`,`Francuska`,`Tamka`,`Foksal`])p.push(...o.streets(e).filter(e=>e.length>1));let m=new wa(c,p,200,{color:15262418,spd:3,scale:3.4}),h=n.controls;h.mode=`orbit`,Object.assign(h.orbit,{t:new G(-300,0,-200),yaw:.35,pitch:.72,dist:3400,min:70,max:5200});let g=null,_=0,b=new St,x={scene:c,fov:32,far:16e3,near:2,keep:!0,post:{grain:.04,vig:.42,sat:.68,bloom:.42},imagineAll:!0,panel:[[`덥수룩한 수염에 큼지막한 체구, 체크무늬 플란넬 셔츠 차림으로 창가에 서서 도시 전체를 내려다보던 M의 모습.`,`¶17`],[`그를 떠올리면 마음이 차분해졌다.`,`¶17`]],marks:[Da([s.route[20],40,s.route[21]],`111번 노선 1980-04-21판 [S1]`,9e3),Da([-300,40,300],`건물 윤곽은 현재 OSM. 1981년과 다를 수 있음`,9e3),Oa([s.anchors.station[0],50,s.anchors.station[1]],`역 이름은 원문에 없음`,9e3),ka([900,60,-400],`M의 창은 연출. 실제 조망이 아니다`,9e3)],update(e,t){m.update(e,t);let r=h.orbit.dist<520;a.viewfinder(r,r?`${1800/h.orbit.dist*50|0} mm`:``),x.fov=32,Math.min(1,h.orbit.dist/900);for(let e of f){let t=n.camera.position.distanceTo(e.position);e.scale.set(t*.16,t*.0375,1)}if(g){let e=g,t=e.i|0,n=e.p[t],r=e.p[t+1]||n,i=e.i-t;h.orbit.t.set(n[0]+(r[0]-n[0])*i,2,n[1]+(r[1]-n[1])*i)}_+=e,Math.abs(+!!h.keys.KeyW)&&(h.orbit.dist*=1-e),h.keys.KeyS&&(h.orbit.dist=Math.min(h.orbit.max,h.orbit.dist*(1+e)))},onClick(){b.setFromCamera(n.pointer,n.camera);let t=new d(new G(0,1,0),0),r=new G;if(!b.ray.intersectPlane(t,r))return;let i=null,a=(h.orbit.dist*.05)**2,o=new et,s=new G;m.a.forEach((e,t)=>{m.m.getMatrixAt(t,o),s.setFromMatrixPosition(o);let n=s.distanceToSquared(r);n<a&&(a=n,i=e)}),i?(g=i,h.orbit.dist=Math.min(h.orbit.dist,300),e.sfx(`한 사람을 따라간다`,2)):(g=null,h.orbit.t.lerp(r,.6))}};if(i.loop(`room`,{type:`brown`,freq:200,gain:.05}),e.sfx(`창문 틈의 바람, 난로 소리`,4),await e.enter(x),a.showTools(!0),e.hint(`끌어서 돌리기 · 휠로 확대 · 사람을 클릭해 따라가기  |  지도 © OpenStreetMap 기여자`),t)await new Promise(t=>{let n=document.createElement(`button`);n.textContent=`창에서 물러난다`,n.className=`on`,n.style.cssText=`position:absolute;left:50%;bottom:9vh;transform:translateX(-50%);border:1px solid #888;padding:9px 18px;background:#0008;pointer-events:auto`,a.root.appendChild(n),n.focus(),n.onclick=()=>{n.remove(),t()},e.auto&&setTimeout(()=>n.click(),80)});else{await e.say(`M은 창가에 서서 도시 전체를 내려다보곤 했다.`,{ref:`¶17`}),await e.say(`그를 떠올리면 마음이 차분해졌다.`,{ref:`¶17`,quote:!0}),await e.say(`도시를 마음껏 돌려 보라.`);{let t=h.orbit,n=s.anchors.univ,r=t.dist,i=t.t.clone(),a=performance.now(),o=(e.auto?.1:3.4)*1e3;await new Promise(e=>{let s=setInterval(()=>{let c=Math.min(1,(performance.now()-a)/o),l=c*c*(3-2*c);t.dist=r+(430-r)*l,t.t.set(i.x+(n[0]-i.x)*l,0,i.z+(n[1]-i.z)*l),c>=1&&(clearInterval(s),e())},16)})}await e.say(`창문까지 들여다볼 수 있다.`),await e.say(`맡은 사람은 셋이다.`,{ref:`¶15`}),await e.say(`붉은 선이 111번 버스의 길이다.`),await new Promise(t=>{let n=document.createElement(`button`);n.textContent=`정류장으로 내려간다`,n.className=`on`,n.style.cssText=`position:absolute;left:50%;bottom:9vh;transform:translateX(-50%);border:1px solid #888;padding:9px 18px;background:#0008;pointer-events:auto;font-size:15px`,a.root.appendChild(n),n.focus(),n.onclick=()=>{n.remove(),t()},e.auto&&setTimeout(()=>n.click(),80)})}await a.fade(!0,e.auto?.02:1.1),i.stopAll(.5),c.remove(o.g),c.remove(m.m),e.dispose(),a.viewfinder(!1),a.hint(``)}async function oo(e,{onSelect:t,area:n,focus:i}={}){let{e:a,hud:o}=e,s=await Ta(e),l=s.data,u=new r;u.background=new U(658447),u.add(s.g),u.fog=s.fogObj,u.add(new rt(14278632,5592142,3.4)),s.style({fog:1053466,fogD:7e-5,sky:[.1,.108,.12],sun:[0,0,0],lit:.3,snow:.3,road:6974062,walk:8026228,ground:4868684,park:3817524,water:659478,bank:3420975,win:1});let d=[];for(let e=0;e<l.route.length;e+=2)d.push(new G(l.route[e],2.5,l.route[e+1]));let f=new H(new v(new M(d,!1,`catmullrom`,.01),700,9,5),new V({color:14239279}));u.add(f);let p=s.bridgeLine?.at(-1)||l.anchors.bridgeE,m=e=>Array.isArray(e)?e:e===`room`?[p[0]+150,p[1]-60]:l.anchors[e],h=15722970,g=14722376,_=[];for(let e of no){if(e.offmap)continue;let t=m(e.at);if(!t)continue;let n=io(e.label,``);n.position.set(t[0],60,t[1]),n.center.set(.5,0),u.add(n);let r=new V({color:h}),i=new H(new y(4,4,60,6),r);i.position.set(t[0],30,t[1]),u.add(i),_.push({P:e,sp:n,pin:i,mat:r,x:t[0],z:t[1]})}let b=new H(new c(60,74,48),new V({color:g,transparent:!0,opacity:.85,depthTest:!1,side:2}));b.rotation.x=-Math.PI/2,b.renderOrder=8,b.visible=!1,u.add(b);let x=a.controls;x.mode=`orbit`,Object.assign(x.orbit,{t:new G(-650,0,-450),yaw:.3,pitch:.95,dist:7e3,min:500,max:12e3,panDrag:!0}),x.onTouch=()=>{w=null};let S=null,C=null,w=null,T=new G,E=a.camera,D=()=>{let e=x.orbit,t=Math.cos(e.pitch);E.fov=32,E.aspect=innerWidth/innerHeight,E.updateProjectionMatrix(),E.position.set(e.t.x+Math.sin(e.yaw)*t*e.dist,Math.sin(e.pitch)*e.dist,e.t.z+Math.cos(e.yaw)*t*e.dist),E.lookAt(e.t),E.updateMatrixWorld()},O=(e,t,n)=>{let r=x.orbit;w={t:e,dist:t,k:0,t0:r.t.clone(),d0:r.dist,y0:r.yaw,y1:n??r.yaw}},k=e=>{let t=x.orbit;t.t.set(0,0,0);for(let e of _)t.t.x+=e.x/_.length,t.t.z+=e.z/_.length;for(let n=0;n<40;n++){D();let n=1e9,r=-1e9,i=1e9,a=-1e9;for(let e of _){T.set(e.x,0,e.z).project(E);let t=(T.x+1)/2*innerWidth,o=(1-T.y)/2*innerHeight;n=Math.min(n,t-60),r=Math.max(r,t+60),i=Math.min(i,o-70),a=Math.max(a,o+10)}let o=Math.max((r-n)/(e.r-e.l),(a-i)/(e.b-e.t));t.dist=B.clamp(t.dist*o**.6,t.min,t.max),D(),x.panBy((e.l+e.r)/2-(n+r)/2,(e.t+e.b)/2-(i+a)/2)}return t.dist},A=(e=!0)=>{let t=x.orbit,r=n?n():{l:24,t:24,r:innerWidth-24,b:innerHeight-24},i=t.t.clone(),a=t.dist,o=t.yaw;t.max=6e4;let s=null;for(let e of innerWidth<=640?[.3,.3-Math.PI/2,.3+Math.PI/2,.3-Math.PI/4,.3+Math.PI/4]:[.3]){t.yaw=e;let n=k(r)*(e===.3?.8:1);(!s||n<s.d)&&(s={d:n,yaw:e,t:t.t.clone(),dist:Math.min(t.dist,14e3)})}if(t.max=14e3,t.yaw=s.yaw,e){t.t.copy(i),t.dist=a;let e=Math.atan2(Math.sin(s.yaw-o),Math.cos(s.yaw-o));t.yaw=s.yaw-e,O(s.t,s.dist,s.yaw)}else t.t.copy(s.t),t.dist=s.dist},j=()=>{let e=innerWidth,t=innerHeight,n=(a.pointer.x+1)/2*e,r=(1-a.pointer.y)/2*t,i=t*.0573,o=t*.09,s=null,c=1e9;for(let l of _){if(T.set(l.x,60,l.z).project(a.camera),T.z>1)continue;let u=(T.x+1)/2*e,d=(1-T.y)/2*t;T.set(l.x,0,l.z).project(a.camera);let f=(1-T.y)/2*t,p=Math.abs(n-u)<o&&r<d+4&&r>d-i,m=Math.abs(n-u)<22&&r>d-4&&r<f+16;if(p||m){let e=Math.abs(n-u)+Math.abs(r-d);e<c&&(c=e,s=l)}}return s},ee=()=>{for(let e of _){let t=e===S||e===C;e.mat.color.setHex(t?g:h),e.sp.material.opacity=S&&e!==S&&e!==C?.55:1}S?(b.position.set(S.x,1.5,S.z),b.visible=!0):b.visible=!1},N=(e,{move:t=!0}={})=>{let n=_.find(t=>t.P.id===e)||null;if(S=n,ee(),n&&t){let e=x.orbit,t=Math.min(e.dist,innerWidth>920?1800:2600),r=i?i():{x:innerWidth/2,y:innerHeight/2},a=t*Math.tan(16*Math.PI/180)*2/innerHeight,o=Math.sin(e.yaw),s=Math.cos(e.yaw),c=(r.x-innerWidth/2)*a,l=(innerHeight/2-r.y)*a/Math.max(.35,Math.sin(e.pitch));O(new G(n.x-s*c+o*l,0,n.z+o*c+s*l),t)}},te={scene:u,fov:32,far:18e3,near:2,keep:!0,ownCursor:!0,imagineFn:()=>!!S?.P.imagined,post:{grain:.03,vig:.26,sat:.72,bloom:.42,exposure:1.15},marks:[],panel:[],update(e){let t=x.orbit;if(w){w.k=Math.min(1,w.k+e/1.1);let n=w.k*w.k*(3-2*w.k);t.t.lerpVectors(w.t0,w.t,n),t.dist=w.d0+(w.dist-w.d0)*n,t.yaw=w.y0+(w.y1-w.y0)*n,w.k>=1&&(w=null)}t.t.x=B.clamp(t.t.x,-4200,4200),t.t.z=B.clamp(t.t.z,-4200,4200);for(let e of _){let t=a.camera.position.distanceTo(e.sp.position);e.sp.scale.set(t*.14,t*.033,1)}if(a.pointerSeen){let e=j();e!==C&&(C=e,ee()),a.canvas.style.cursor=e?`pointer`:``}},onClick(){let e=j();e&&(N(e.P.id),t?.(e.P.id))}};return A(!1),await e.enter(te,{fade:1.8}),{select:N,home:A,clear(){S=null,ee()},async leave(){x.onTouch=null,x.orbit.panDrag=!1,a.canvas.style.cursor=``,await o.fade(!0,e.auto?.02:.9),e.dispose(),u.remove(s.g),o.imagine(!1)}}}function so(e){let t=[];for(let n=0;n<e.route.length;n+=2)t.push([e.route[n],e.route[n+1]]);let n=[0];for(let e=1;e<t.length;e++)n.push(n[e-1]+Math.hypot(t[e][0]-t[e-1][0],t[e][1]-t[e-1][1]));let r=e=>{e=Math.max(0,Math.min(n.at(-1),e));let r=1;for(;r<n.length-1&&n[r]<e;)r++;let i=(e-n[r-1])/(n[r]-n[r-1]||1),a=t[r-1],o=t[r];return{x:a[0]+(o[0]-a[0])*i,z:a[1]+(o[1]-a[1])*i,yaw:Math.atan2(-(o[0]-a[0]),-(o[1]-a[1]))}};return{at:r,near:(e,t)=>{let i=0,a=0xe8d4a51000;for(let o=0;o<n.at(-1);o+=10){let n=r(o),s=(n.x-e)**2+(n.z-t)**2;s<a&&(a=s,i=o)}return i},len:n.at(-1)}}function co(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`rgba(200,205,205,.34)`,t.fillRect(0,0,256,256);let n=z(8);for(let e=0;e<60;e++){let e=n()*256,r=n()*256,i=10+n()*50,a=t.createRadialGradient(e,r,0,e,r,i);a.addColorStop(0,`rgba(0,0,0,.9)`),a.addColorStop(1,`rgba(0,0,0,0)`),t.globalCompositeOperation=`destination-out`,t.fillStyle=a,t.fillRect(0,0,256,256)}t.globalCompositeOperation=`source-over`;let r=new f(e);return r.wrapS=r.wrapT=Dt,r}function lo(e=`bus`){let t=new R,n=e===`bus`?11:10,r=2.45,i=2.3,a=J(e===`bus`?9143411:13221272,{roughness:.6}),o=J(2499615),s=J(e===`bus`?3877922:6965804,{map:kt(`#4a3524`)}),c=new V({map:co(),color:5857900,transparent:!0,depthWrite:!1,opacity:.6,side:2});t.add(Y(r,.05,n,J(2828838,{map:ut([1,3])}),0,0,0),Y(r,.05,n,J(12170404),0,i,0));for(let e of[-1,1]){t.add(Y(.05,.82,n,a,e*r/2,.41,0),Y(.05,.32,n,a,e*r/2,2.1399999999999997,0));for(let n=-5;n<=5;n++)t.add(Y(.06,1.2,.09,o,e*r/2,1.42,n));let i=X(n,1.2,c,e*(r/2-.02),1.42,0,Math.PI/2*e);t.add(i)}t.add(Y(r,i,.05,a,0,i/2,n/2),Y(r,.8,.05,a,0,.4,-n/2),Y(r,.4,.05,a,0,2.0999999999999996,-n/2));for(let e=-4;e<4.5;e+=1.25){for(let n of[-.78,.78]){let r=new R;r.add(Y(.9,.09,.42,s,0,.47,0),Y(.9,.5,.06,s,0,.76,.2),Y(.04,.47,.04,o,0,.23,0)),r.position.set(n,0,e),t.add(r),(e*4|0)%3}t.add(Ra(.018,1.9,J(11577230,{metalness:.7,roughness:.35}),-.26,1.2,e+.2,8))}if(t.add(Y(.05,.03,n-1,J(11577230,{metalness:.7}),.3,1.95,0)),e===`bus`){let e=J(1776152);for(let n=0;n<7;n++)for(let a of[-1,1])t.add(Y(.1,2.1999999999999997,.05,e,a*(r/2-.04),i/2,-.45+n*.15));t.add(Ra(1.15,.03,J(4867648,{metalness:.5}),0,.04,0,24))}else t.add(Y(.04,.14,n,J(10104613),r/2-.03,.9,0),Y(.04,.14,n,J(10104613),-1.195,.9,0),Y(2.25,1.9,.06,J(4864554),0,.98,-n/2+.25));for(let e=-4;e<=4;e+=4){let n=Y(.5,.03,.12,new V({color:16764810}),0,2.27,e);t.add(n);let r=new Je(16763274,3.2,6,1.6);r.position.set(0,2.0999999999999996,e),t.add(r)}z(4);for(let e of[-2.8,-.3,2.2]){let n=Ka({coat:1381914,h:1.5,skin:3815219});n.position.set(e<0?.78:-.78,-.3,e),n.scale.setScalar(.82),t.add(n)}return t}function uo(e,t,n,r){let i=r.near(...t.anchors.univ),a=new R,o=e=>{let t=Math.cos(e.yaw),n=Math.sin(e.yaw);return[-t,n]},s=(e,t,n=0)=>{let a=r.at(i+e),s=o(a);return[a.x+s[0]*t,n,a.z+s[1]*t,a.yaw]},c=(e,t,n,r,i)=>{let o=s(e,r,i),c=X(t,n,new At({map:gt(`STRAJK`),roughness:1,side:2,emissive:5579298,emissiveIntensity:.6}),o[0],o[1],o[2],o[3]+Math.PI/2);a.add(c);let l=new Je(16761466,80,50,1.6);l.position.set(o[0]-Math.sin(o[3])*0,i+3,o[2]);let u=s(e,r-7,i+2);l.position.set(u[0],u[1],u[2]),a.add(l)};c(-150,24,5.5,17,7.5),c(-40,18,4.5,16,6.5);for(let e=0;e<5;e++){let t=s(-120+e*5,12),n=Y(3.4,1.05,1.1,J(3813926),t[0],.52,t[2]);if(n.rotation.y=t[3],a.add(n),e==2){let e=new Je(16756832,30,16,1.8);e.position.set(t[0],2.4,t[2]),a.add(e)}}for(let e=0;e<2;e++){let t=s(-70+e*1.4,11.5),n=Ka({coat:855568,h:1.45,skin:3486254});n.position.set(t[0],0,t[2]),n.rotation.y=t[3]-Math.PI/2;let r=Y(.28,.14,.2,J(6969924),t[0],.95,t[2]);a.add(n,r)}let l=z(6);for(let e=0;e<46;e++){let e=s(-190+l()*200,9+l()*6),t=Ka({coat:526346,h:1.62+l()*.2,skin:1710618});t.position.set(e[0],0,e[2]),t.rotation.y=l()*6.3,a.add(t)}return n.add(a),a}async function fo(e){let{e:t,a:n}=e,i=await Ta(e),a=i.data,o=new r;o.background=new U(460811),o.add(i.g),o.fog=i.fogObj,o.add(new rt(5923440,1381651,.5)),i.style({fog:592655,fogD:.011,sky:[.03,.033,.04],sun:[0,0,0],lit:.3,snow:.5,road:1776413,walk:3947580,ground:4540235,park:3816510,bank:2499874});let s=a.anchors.zamenhofa,c=new R;c.position.set(s[0],0,s[1]),o.add(c),c.add(Ra(.04,2.6,J(2763306),-1.7,1.3,-1.2));let l=Y(.7,.5,.04,J(14209208,{map:Ee(`111`,{w:256,h:180,fg:`#1a1a1a`,bg:`#d8d0b8`,font:`800 110px sans-serif`})}),-1.7,2.6,-1.2);c.add(l);let u=Y(30,11,8,J(328967),30,5.5,-90);c.add(u);let d=i.lampPoints(i.sample(i.streets(`Ludwika Zamenhofa`)).slice(0,40),16756832,10),f=Ja(o,()=>t.camera.position.clone().add(new G(0,-.14,-.5))),p=Xa(o,[s[0]-20,s[0]+20,0,8,s[1]-20,s[1]+20],260,16777215,.03,.55,.5),m=t.controls;m.mode=`look`,m.pos.set(s[0],1.62,s[1]),m.yaw=.25,m.pitch=.02,m.limit=[-1.6,1.6,-.5,.5];let h={scene:o,fov:56,post:{grain:.06,vig:.6,sat:.5,bloom:.45},imagineAll:!0,panel:[[`기념비 근처에서 있으려니 추위에 몸이 뻣뻣하게 굳었지만`,`¶9`]],marks:[Ea([s[0]-1.7,2.2,s[1]-1.2],`111번 정류장 ¶9`,9),Oa([s[0]+30,8,s[1]-90],`기념비의 식별은 추정`,140)],update(e){f(e),p(e)}};n.loop(`wind`,{type:`brown`,freq:320,gain:.09,lfo:.15,lfoDepth:.04}),await e.enter(h),await e.say(`111번 버스가 서는 정류장. 기념비 근처다.`,{ref:`¶9`}),e.sfx(`바람. 턱이 덜덜 떨린다`,3),await e.say(`서 있으려니 몸이 뻣뻣하게 굳었다.`,{ref:`¶9`}),await e.wait(1.5),o.remove(d),i.g.remove(d),await e.leave(.9),o.remove(i.g)}async function po(e,t,{kind:n=`bus`,intro:i=[],mapOff:a=!1}={}){let{e:o,a:s,hud:c}=e,l=await Ta(e),u=l.data,d=so(u),f=new r;f.background=new U(460811),f.add(l.g),f.add(new rt(9081244,2763304,1.9)),l.style({fog:658448,fogD:.0052,sky:[.03,.033,.04],sun:[0,0,0],lit:.34,snow:.3,road:3026483,walk:4868423,ground:3815994,park:2368799,water:329739,bank:2368289,win:1});let p=lo(n);f.add(p),uo(l,u,f,d);let m=[`Krakowskie Przedmieście`,`Nowy Świat`,`Aleje Jerozolimskie`,`Aleja Księcia Józefa Poniatowskiego`,`Francuska`,`Saska`,`Ludwika Zamenhofa`],h=[];for(let e of m)h.push(...l.streets(e).filter(e=>e.length>1));let g=new wa(f,h,260,{color:460554,spd:1.3}),_=l.lampPoints(l.sample(h),16757864,16),v=l.trees(l.sample(l.streets(`Francuska`).concat(l.streets(`Saska`))).filter((e,t)=>t%2==0),{h:10}),y=o.controls;y.mode=`look`,y.parent=p,y.pos.set(-.8,1.22,.6),y.yaw=.55,y.pitch=-.03,y.limit=[-.6,2.1,-.45,.4],p.updateMatrixWorld();let b=[...t],x=b.shift(),S=x.from,C=!1,w=0,T={scene:f,fov:60,far:2600,keep:!0,post:{grain:.05,vig:.55,sat:.62,bloom:.55},panel:[[`눈동자가 되어, 검고 투명한 동공이 되어 도시를 관망하며.`,`¶9`],[`어두운 물이 무심하게 흐르는 비스와강`,`¶13`]],imagined:[{p:[0,0,0],d:1e6,r:1e6}],marks:[Da([u.anchors.univ[0],9,u.anchors.univ[1]+40],`대학 정문의 파업 현수막 ¶11. 글꼴은 상상`,120),Da([820,3,-60],`포니아토프스키 다리 추정`,260)],update(e,t){if(g.update(e,t),w+=e,!C){let t=x.speed??12;S+=t*e,S>=x.to&&(C=!0)}let n=d.at(S),r=d.at(S+7),i=Math.atan2(-(r.x-n.x),-(r.z-n.z));p.position.set(n.x+Math.cos(i)*-.5*0-Math.sin(i)*0,.35+Math.sin(w*9)*.008+Math.sin(w*23)*.004,n.z),p.rotation.y=i,p.updateMatrixWorld(),s.set(`eng`,{freq:90+(x.speed??12)*5}),T.imagined[0].p=[p.position.x,1,p.position.z]}};s.loop(`eng`,{type:`brown`,freq:140,gain:.14}),s.loop(`rat`,{type:`white`,freq:1800,q:4,filter:`bandpass`,gain:.012}),await e.enter(T,{fade:1}),n===`bus`?e.sfx(`디젤 엔진, 창틀이 떨린다`,3.5):e.sfx(`전차 바퀴가 선로 이음매를 친다`,3.5),a&&c.mapOff();for(let t of i)await e.say(...typeof t==`string`?[t]:t);for(;await new Promise(t=>{let n=setInterval(()=>{(C||e.auto)&&(clearInterval(n),t())},100)}),b.length;)await c.fade(!0,e.auto?.02:.7),x=b.shift(),S=x.from,C=!1,await e.wait(.2),await c.fade(!1,e.auto?.02:.8),x.say&&e.say(...x.say);await c.fade(!0,e.auto?.02:.9),s.stopAll(.5),f.remove(l.g),f.remove(g.m),l.g.remove(_),l.g.remove(v),e.dispose(),c.hint(``)}function mo(e,t){let n=e.city.data,r=t.near(...n.anchors.univ),i=t.near(...n.anchors.cafe),a=t.near(...n.anchors.bridgeW);return[{from:220,to:520,speed:12},{from:r-230,to:r+30,speed:8,say:[`붉은 글씨로 파업을 알리는 현수막. 사람들의 검은 실루엣.`,{ref:`¶11`}]},{from:r+30,to:i+30,speed:14,say:[`우리는 그 열기와 소란, 불빛과 온기로부터 멀리 떨어져 있었다.`,{ref:`¶11`}]},{from:a-70,to:a+390,speed:11,say:[`어두운 물이 무심하게 흐르는 비스와강을 건넌다.`,{ref:`¶13`}]}]}async function ho(e){let{e:t,a:n}=e,i=new r;i.background=new U(197379),i.fog=new _e(2761241,.02);let a=J(16777215,{map:kt(`#2c2118`,[3,1]),roughness:.7}),o=Va(13,8,3,{wall:a,floor:J(3812642,{map:Ye([5,3])}),ceil:J(3814444),open:{n:!0}});i.add(o),i.add(Y(4.6,.5,.2,a,-4.2,2.75,-4),Y(4.6,.5,.2,a,1.8,2.75,-4),Y(13,.8,.2,a,0,.4,-4),Y(.6,3,.2,a,-1.2,1.5,-4),Y(.5,3,.2,a,4.3,1.5,-4),Y(2,3,.2,a,5.6,1.5,-4),Y(.5,3,.2,a,-6.4,1.5,-4));let s=new At({color:1777442,roughness:.08,transparent:!0,opacity:.34});i.add(X(4.6,1.9,s,-4.2,1.75,-4),X(5,1.9,s,1.6,1.75,-4));let c=new R;c.add(X(40,12,J(2763564),0,1,-11),X(40,10,J(1710620),0,0,-7,0,-Math.PI/2));let l=X(6,2.2,new V({color:10254917}),0,1.5,-10.9);c.add(l),c.add(Y(.2,2.2,.1,J(273),-3,1.5,-10.8),Y(.2,2.2,.1,J(273),3,1.5,-10.8));let u=[];for(let e=0;e<7;e++){let t=Ka({coat:[3813416,3090981,3682603][e%3],h:1.62,skin:3814705,bulk:1.15});t.position.set(-5+e*1.5,0,-9.2-e%2*.4),t.rotation.y=Math.PI/2,t.ph=e,c.add(t),u.push(t)}i.add(c),c.add(X(3.4,.6,new V({map:Ee(`BAR PIOTRUŚ`,{w:512,h:96,fg:`#d9b77a`,bg:`#141210`,font:`700 56px sans-serif`})}),-6.4,3.1,-10.85));let d=(e,t)=>{let n=Ra(.16,.2,J(6967608),e,2.5,t,12,.08),r=new Je(14919018,10,9,1.6);r.position.set(e,2.3,t),i.add(n,r)};d(-3,-1),d(2.5,-1),d(-3,2.5),d(3,2.5),i.add(new rt(11048572,4864556,2.6));let f=Wa(.8,.8,.72,{top:J(2365971,{roughness:.4})});f.position.set(1.3,0,-2.9),i.add(f);let p=Ga(14209211,!1);p.position.set(1.15,.74,-2.75),i.add(p);let m=Ga(14209211,!1);m.position.set(1.5,.74,-3.05),i.add(m);let h=Ra(.07,.03,J(7828844,{metalness:.5}),1,.755,-3.1,10);i.add(h);let g=[];for(let[e,t,n]of[[-3.6,-2.4,1],[-4.5,-1.4,2],[-2.2,1,3],[-3.2,1.8,5],[3,1.5,4],[3.9,2.4,2.4],[4.8,.6,3.4],[-5.2,2.7,.8]]){let r=Wa(.7,.7,.72,{top:J(2365971)});r.position.set(e+.35,0,t+.3),i.add(r);let a=Ka({coat:[1381135,1775636,1184015][(e*3&3)%3],h:1.28,skin:4866616,bulk:1.05});a.position.set(e,-.05,t),a.rotation.y=n,a.ry=n,a.ph=e,i.add(a),g.push(a)}let _=Y(4,1.1,.6,a,-1,.55,3.6);i.add(_);let v=Ka({coat:2828838,h:1.66,skin:5919304});v.position.set(-1.5,0,3.1),i.add(v);let y=Y(.04,1.7,1.6,J(1709842),6.4,1.1,2.6);i.add(y);let b=qa();b.position.set(6,0,3.4),b.rotation.y=Math.PI/2+.8,i.add(b),b.visible=!1;let x=[Ya(i,[-6,6,1.7,2.8,-3.6,3.6],12,{op:.07,size:4})],S={walk:0,target:null,turn:0},C=t.controls;C.mode=`look`,C.pos.set(1.05,1.16,-2.25),C.yaw=.25,C.pitch=-.08,C.limit=[-2.4,3,-.5,.4];let w={scene:i,fov:50,post:{grain:.05,vig:.65,sat:.58,tint:[1,.95,.85],bloom:.3,exposure:1.05},panel:[[`그 순간 그는 마치 극장 분장실에 들어온 배우처럼 보였다.`,`¶27`],[`약을 먹으면, 내가 아닌 것 같아.`,`¶35`],[`늘 텅 비어 있어 불빛만 새어 나오는 옷 가게`,`¶19`]],imagined:[{p:[0,1.5,0],d:20,r:9}],marks:[Da([-6.4,3,-10],`맞은편 바 피오트루시 [S41]. 간판 모양은 상상`,14),Da([0,2,-3],`노비시비아트 21 부근 [S41]`,9),Ea([1.3,.9,-2.9],`시럽 같은 차 ¶23`,4),Ea([0,1.6,-10],`텅 빈 옷 가게와 장바구니 여자들 ¶19`,12),ka([-3,2.5,1],`실내 구성은 상상`,12)],update(e,t){x.forEach(t=>t(e));for(let e of u)e.position.x+=Math.sin(t*.3+e.ph)*8e-4;for(let t of g)t.rotation.y=B.lerp(t.rotation.y,S.turn?Math.atan2(b.position.x-t.position.x,b.position.z-t.position.z):t.ry,e*.7);if(S.target){let r=S.target[0]-b.position.x,i=S.target[1]-b.position.z,a=Math.hypot(r,i);a>.05?(b.position.x+=r/a*e*1.1,b.position.z+=i/a*e*1.1,b.rotation.y=Math.atan2(r,i),b.position.y=Math.abs(Math.sin(t*6))*.03,S.walk+=e,S.walk>.5&&(S.walk=0,n.clink(),n.step(`wood`))):S.target=null}}};n.loop(`room`,{type:`brown`,freq:500,q:.6,gain:.1,lfo:.2,lfoDepth:.02}),await e.enter(w),e.hint(`끌어서 고개를 돌린다`),e.sfx(`찻숟가락, 낮은 말소리`,4),await e.say(`아마토르스카. 창가 자리에서 차를 마시며 기다린다.`,{ref:`¶19`}),await e.say(`창밖에는 늘 비어 있는 옷 가게, 장바구니를 든 여자들.`,{ref:`¶19`}),await e.wait(2),n.clink(),n.hit({freq:300,q:1,dur:.2,gain:.4,type:`brown`}),b.visible=!0,S.target=[3,1.4],S.turn=1,e.sfx(`문이 열린다. 철제 식기가 덜그럭거린다`,4),await e.say(`노동에 경의를 표하라, 동포들이여!`,{ref:`¶21`,quote:!0}),n.set(`room`,{gain:.14}),await e.wait(2.2),await e.say(`사람들이 천천히 고개를 돌렸다. 비웃음과 다정함이 섞인 미소로.`,{ref:`¶21`}),S.target=[2.1,-2.6],await e.say(`저 사람이 날 기다리고 있어.`,{ref:`¶25`,quote:!0}),await e.wait(3.2),S.turn=0,b.position.set(1.72,-.34,-3.5),b.rotation.y=-.1,b.helmet.visible=!1,b.children.find(e=>e.geometry?.type===`CylinderGeometry`&&e.position.y>1.7).visible=!1,b.hairCap.material=J(11842734,{roughness:.6}),b.hairCap.visible=!0,n.set(`room`,{gain:.045,freq:300}),e.sfx(`소리가 낮아진다`,3),await e.say(`철모와 털모자를 벗자 그는 분장실의 배우처럼 보였다.`,{ref:`¶27`}),await e.say(`춥네.`,{ref:`¶29`,quote:!0}),await e.wait(1);let T=Ba(.6,.8,.6,1.72,1.1,-3.5,`“좀 어때?”`,null,{range:5});i.add(T),w.hots=[T],t.hots=w.hots,await e.face(1.72,1.1,-3.5),e.hint(`클릭하거나 E를 눌러 묻는다`),await e.until(T,{timeout:20}),e.hint(``),await e.say(`좋아, 안 좋아. 그 말에는 아무런 무게도 없었다.`,{ref:`¶33`}),await e.say(`약을 먹으면, 내가 아닌 것 같아.`,{ref:`¶35`,quote:!0}),await e.say(`내 임무는 적절한 순간에 그를 병원으로 데려가는 것이었다.`,{ref:`¶39`}),await e.say(`우리 클럽에 가자, 하고 권하면 그는 말했다.`,{ref:`¶45`}),await e.say(`거긴 별로 가고 싶지 않아.`,{ref:`¶47`,quote:!0}),await e.say(`거기서는 날 미친놈이라고 생각하거든.`,{ref:`¶51`,quote:!0}),await e.say(`대체 왜 그러는 건데?`,{ref:`¶61`}),await e.say(`모르겠어, 아마 내가 진짜 미친놈인가 보지.`,{ref:`¶63`,quote:!0}),await e.wait(1);{let e=Ka({coat:2762280,h:1.3,skin:11708056,bulk:.82,hair:9210500});e.position.set(.72,-.05,-3.42),e.rotation.y=.25,i.add(e);let t=Y(.05,.07,.05,J(13214282,{transparent:!0,opacity:.6}),.95,.78,-3.05);i.add(t)}await e.say(`때로는 안나 아주머니가 같은 자리에 앉아 코냑을 마셨다.`,{ref:`¶117`}),b.visible=!1,n.clink(),await e.say(`그가 식기를 딸랑거리며 나가면 그제야 이야기를 꺼냈다.`,{ref:`¶121`}),await e.wait(1),await e.leave()}async function go(e){let{e:t,a:n}=e,i=new r;i.background=new U(657672),i.fog=new _e(2366742,.02),i.add(new rt(13219994,5917242,2.4));let a=Va(5,4,2.6,{wall:J(9404258),floor:J(9072210,{map:Ye([3,3])}),ceil:J(12432026)});i.add(a);let o=new Je(16763274,6,7,1.7);o.position.set(0,2.2,0),i.add(o);let s=new R;s.position.set(0,0,-1.75);let c=J(3811869,{map:kt()});s.add(Y(2.4,2,.42,c,0,1,0));let l=new At({color:2105894,roughness:.1,transparent:!0,opacity:.22}),u=z(44);for(let e=0;e<3;e++){s.add(Y(2.2,.03,.34,J(14209728),0,.55+e*.48,.06));for(let t=0;t<9;t++){let n=[15261900,4876938,13214282,11024944,6982234][u()*5|0],r=u()<.5?Ra(.04,.12+u()*.1,J(n,{roughness:.3}),-.95+t*.24,.66+e*.48,.1,10,.02):new H(new b(.05+u()*.03,10,8),J(n,{roughness:.3}));r.geometry.type===`SphereGeometry`&&r.position.set(-.95+t*.24,.62+e*.48,.1),s.add(r)}}s.add(X(2.24,1.7,l,0,1.05,.215)),i.add(s);let d=Wa(1.1,.8,.72,{top:J(3811869,{map:kt(`#3a2a1d`)})});d.position.set(1.1,0,.2),i.add(d);let f=X(.7,.5,new V({map:it(),transparent:!0,color:15262936}),1.1,.745,.2,0,-Math.PI/2);i.add(f);let p=Y(.6,.34,.28,new V({color:3832458,transparent:!0,opacity:.7}),-1.9,.95,-.6);i.add(p,Y(.7,.8,.34,c,-1.9,.4,-.6));let m=Ka({coat:2369070,h:1.74,skin:9076852,hair:2761760});m.position.set(-.7,0,-.6),m.rotation.y=.5,i.add(m);let h=Ka({coat:4865850,h:1.3,skin:9076852,hair:9078400});h.position.set(1.75,0,.2),h.rotation.y=-1.5,i.add(h);let g=t.controls;g.mode=`look`,g.pos.set(.5,1.5,1.7),g.yaw=-.1,g.pitch=-.12,g.limit=[-1,1,-.5,.3];let _={scene:i,fov:56,imagineAll:!0,marks:[Ea([0,1.4,-1.5],`장식품이 가득한 집 ¶77`,7),ka([0,2.2,0],`집의 모습은 상상`,7)],panel:[[`부모님과 함께 샤세루프 거리에 있는 장식품이 가득한 집에서 살았다.`,`¶77`]],post:{grain:.04,vig:.5,sat:.75,bloom:.3,tint:[1,.97,.9]}};n.loop(`clk`,{type:`white`,freq:3e3,q:8,filter:`bandpass`,gain:.004,lfo:1,lfoDepth:.004}),await e.enter(_),e.sfx(`벽시계 소리`,3),await e.say(`이고르는 부모님과 함께 샤세루프 거리, 장식품이 가득한 집에 살았다.`,{ref:`¶77`}),await e.say(`우리는 마치 식물을 심듯 그를 한자리에 뿌리 내리게 하려 애썼다.`,{ref:`¶79`,quote:!0}),await e.leave(1)}async function _o(e){let{e:t,a:n}=e,i=new r;i.background=new U(328965),i.fog=new _e(1710872,.03),i.add(new rt(12172456,5592394,2.6));let a=Va(9,6,2.5,{wall:J(9078652,{map:ut([3,1])}),floor:J(9078652,{map:ut([3,2])}),ceil:J(5591626)});i.add(a);for(let e=-1;e<=1;e++){let t=new Je(14211256,6,7,1.7);t.position.set(e*3,2.3,0),i.add(t,Y(.9,.04,.1,new V({color:15263948}),e*3,2.46,0))}let o=J(4868676,{metalness:.5});for(let e of[-2.2,-1.8,1.9]){let t=Ra(.05,9,o,0,2.28,e,8);t.rotation.z=Math.PI/2,i.add(t)}i.add(Ra(.08,.01,J(1381653),2.4,.006,1.4,14));let s=Wa(2.7,1.5,.76,{top:J(2637882)});s.position.set(-2.6,0,-1),i.add(s,Y(.02,.14,1.5,J(14211272),-2.6,.83,-1));let c=Wa(1,.8,.72,{top:J(6969924)});c.position.set(1.2,0,.5),i.add(c);let l=Y(.4,.03,.4,J(13219994),1.5,.75,.3);i.add(l);for(let e=0;e<6;e++){let t=Y(.07,.003,.1,J(15262936),.9+e*.05,.745,.62-e%2*.08);t.rotation.y=e*.2,i.add(t)}i.add(Y(.24,.004,.3,J(16777215,{map:pt(14)}),1.1,.745,.25));let u=Ka({coat:2369070,h:1.36,skin:9076852,hair:2761760});u.position.set(1.2,0,-.15),i.add(u);let d=t.controls;d.mode=`look`,d.pos.set(1.2,1.2,1.2),d.yaw=0,d.pitch=-.32,d.limit=[-1.3,1.3,-.7,.3];let f=Ba(.5,.2,.4,1,.8,.55,`카드를 돌린다`,null,{range:3});i.add(f);let p={scene:i,fov:56,hots:[f],imagineAll:!0,marks:[Ea([1.2,.9,.5],`카드, 십자말풀이 ¶79`,5),Ea([-2.6,1,-1],`탁구 ¶45`,7),ka([0,2.2,0],`세탁실의 모습은 상상`,8)],panel:[[`단조롭고 지루한 게임을 질릴 때까지 했다.`,`¶79`]],post:{grain:.04,vig:.5,sat:.5,bloom:.3}};n.loop(`c`,{type:`brown`,freq:200,gain:.04}),await e.enter(p),e.sfx(`배관 속 물소리`,3),e.hint(`클릭하거나 E를 눌러 카드를 돌린다`),await e.say(`동네 클럽. 세탁실을 고친 휴게실이다.`,{ref:`¶45, ¶79`}),await e.until(f,{timeout:25}),e.hint(``),n.clink(),await e.say(`카드놀이와 십자말풀이를 질릴 때까지 했다.`,{ref:`¶79`}),await e.say(`우표, 모형 비행기, 열대어, 광물. 온갖 취미를 권했다.`,{ref:`¶79`}),await e.say(`그는 온화하게 미소 지으며 다시 기차 이야기를 꺼냈다.`,{ref:`¶79`}),await e.leave(1)}async function vo(e){await yo(e),await go(e),await _o(e),await bo(e),await xo(e)}async function yo(e){let{e:t,a:n}=e,i=await Ta(e),a=i.data,o=new r;o.background=new U(1711654),o.add(i.g),o.fog=i.fogObj,o.add(new rt(11976137,7237750,2.2)),i.style({fog:1711654,fogD:.012,sky:[.05,.053,.06],sun:[0,0,0],lit:.22,snow:.85,road:13093840,walk:13883355,ground:13488598,park:13094097,bank:2763304});let s=i.streets(`Saska`).reduce((e,t)=>e.concat(t),[]);s.sort((e,t)=>e[1]-t[1]);let c=s.filter(e=>Math.hypot(e[0]-a.anchors.saska[0],e[1]-a.anchors.saska[1])<160),l=c[0],u=(()=>{let e=c.at(-1),t=Math.hypot(e[0]-l[0],e[1]-l[1]),n=Math.min(1,95/t);return[l[0]+(e[0]-l[0])*n,l[1]+(e[1]-l[1])*n]})(),d=(e,t)=>{let n=u[0]-l[0],r=u[1]-l[1],i=Math.max(0,Math.min(1,((e-l[0])*n+(t-l[1])*r)/(n*n+r*r)));return Math.hypot(l[0]+n*i-e,l[1]+r*i-t)<5.5},f=i.trees(i.sample([[l,u]]).concat(i.sample(i.streets(`Francuska`))),{h:11}),p=i.lampPoints(i.sample([[l,u]]),16760954,12),m=Xa(o,[l[0]-30,l[0]+30,0,10,l[1]-20,u[1]+20],400,16777215,.035,.65,.45),h=[`FRANCUSKA`,`OBROŃCÓW`,`WALECZNYCH`,`ATEŃSKA`,`SASKA`],g=new R,_=new L(u[0]-l[0],u[1]-l[1]),v=_.length();_.normalize(),h.forEach((e,t)=>{let n=(t+1)/(h.length+1)*v,r=l[0]+_.x*n+_.y*5,i=l[1]+_.y*n-_.x*5;g.add(Ra(.03,2.4,J(546),r,1.2,i));let a=Y(1.1,.26,.03,new V({map:Ee(e,{w:512,h:120,fg:`#e8e4d8`,bg:`#1e3a5f`,font:`700 62px sans-serif`})}),r,2.4,i);a.rotation.y=Math.atan2(_.x,_.y)+Math.PI/2,g.add(a)}),o.add(g);let y=t.controls;y.mode=`walk`,y.surface=`snow`,y.speed=2,y.stepEvery=.68,y.place(l[0],0,l[1],Math.atan2(-_.x,-_.y),-.02),y.nav=d;let b=e.pick();o.add(b),t.floorPick=[b];let x=Ja(o,()=>t.camera.position.clone().add(t.camera.getWorldDirection(new G).multiplyScalar(.5)).add(new G(0,-.15,0))),S={scene:o,fov:60,far:900,keep:!0,post:{grain:.04,vig:.45,sat:.55,bloom:.4},imagined:[{p:[l[0],2,l[1]],d:900,r:900}],panel:[[`거기 도착하면 도시의 소음이 잦아들었고`,`¶13`],[`길바닥에 쌓인 눈은 마치 시골에서처럼 발밑에서 더 경쾌하게뽀드득거렸다.`,`¶13`]],marks:[Ea([l[0]+_.x*40,3,l[1]+_.y*40],`¶207의 거리 이름. 철자는 추정`,40),Da([l[0]+_.x*80,4,l[1]+_.y*80],`도로 선형은 지도`,60)],update(e){m(e),x(e)}};n.loop(`wind`,{type:`brown`,freq:230,gain:.05}),await e.enter(S),e.hint(`W 키나 눈길 클릭으로 걷는다`),await e.say(`강을 건너 사스카켕파. 도시의 소음이 잦아든다.`,{ref:`¶13`}),e.sfx(`눈 밟는 소리`,3),await e.say(`눈은 시골에서처럼 발밑에서 경쾌하게 뽀드득거린다.`,{ref:`¶13`}),await e.walkUntil(()=>Math.hypot(y.pos.x-u[0],y.pos.z-u[1])<9,{after:35,fn:()=>{y.target||=new G(u[0],0,u[1])}}),await e.leave(1),i.g.remove(f),i.g.remove(p),o.remove(i.g)}async function bo(e){let{e:t,a:n}=e,i=new r;i.background=new U(131587),i.fog=new _e(1908250,.022),i.add(new rt(14015691,9079420,3.6));let a=J(6512730,{map:ut([14,2])}),o=new R;i.add(o),o.add(X(90,9,J(6973279,{map:ut([16,2])}),0,0,0,0,-Math.PI/2),X(90,14,a,0,4,0,0,Math.PI/2));let s=X(90,.16,new V({color:9315099}),0,.012,3.6,0,-Math.PI/2);o.add(s);for(let e=-40;e<=40;e+=8){o.add(Y(.6,4,.6,a,e,2,-2));let t=Ha(e+4,3.9,0,{i:Math.abs(e+4)<=12?14:0,dist:Math.abs(e+4)<=12?18:.1,color:13161664});Math.abs(e+4)>12&&t.remove(t.light),o.add(t)}o.add(X(90,4,a,0,2,-4.5)),o.add(X(90,4,J(2762790),0,-1.2,4.6,0,-Math.PI/2)),o.add(Y(90,6,.5,J(3420718),0,1,11));let c=document.createElement(`canvas`);c.width=1024,c.height=256;let l=c.getContext(`2d`),u=new f(c);u.colorSpace=ee;let d=[`KATOWICE`,`GDAŃSK`,`WAŁBRZYCH`,`LUBLIN`,`BIAŁYSTOK`,`MRĄGOWO`],p=0,m=()=>{l.fillStyle=`#060606`,l.fillRect(0,0,1024,256),l.fillStyle=`#e7a83a`,l.font=`700 96px ui-monospace,Menlo,monospace`,l.fillText(d[p%6],40,120),l.font=`56px ui-monospace,Menlo,monospace`,l.fillStyle=`#b98a33`,l.fillText(d[(p+1)%6],40,205),u.needsUpdate=!0,p++};m();let h=Y(3.2,.8,.1,new V({map:u}),2,3,0);o.add(h,Y(.05,.4,.05,J(546),2,3.6,0));let g=new R,_=J(2046509,{roughness:.6});for(let e=0;e<7;e++){let t=Y(24,3.2,3,_,e*25,1.6,6.5);g.add(t);for(let t=0;t<9;t++)g.add(Y(1.1,.9,.04,new V({color:e==3?10256976:7233600}),e*25-10+t*2.5,2.2,4.98));if(e==3){let t=Y(3,.5,.04,new V({map:Ee(`WARS`,{w:256,h:80,fg:`#e7e2d0`,bg:`#7a1f1a`,font:`800 60px sans-serif`})}),e*25,.9,4.98);g.add(t)}}g.position.x=-240,o.add(g);let v=Ka({coat:2369070,h:1.74,skin:9076852,hair:2761760});v.position.set(-.7,0,2.9),v.rotation.y=2.6,o.add(v);let y=t.controls;y.mode=`walk`,y.surface=`concrete`,y.speed=1.8,y.place(-2,0,1.5,-1.8,0),y.nav=[[-14,14,-1.5,3.45]],t.floorPick=[o.children[0]];let b=0,x=-240,S=!1,C={scene:i,fov:58,post:{grain:.05,vig:.55,sat:.6,tint:[.97,1,.92],bloom:.5},imagined:[{p:[2,3,0],d:30,r:3},{p:[0,3,3],d:40,r:40}],panel:[[`객차의 숫자를 하나하나 세면서`,`¶79`],[`학교에 안 가고는 방법이 없나?`,`¶93`],[`와, 바르스다!`,`¶81`]],marks:[Da([0,3.4,-2],`지하역 구조 [S26]. 역 이름은 원문에 없다`,16),Ea([0,.2,3.5],`붉은 안전선 ¶79`,8),Ea([2,3,0],`전광판 ¶79. 행선지는 ¶207의 도시, 폴란드어 철자는 추정`,8)],update(e,t){b+=e,b>3&&(b=0,m(),n.beep({freq:1200,dur:.05,gain:.02})),S&&(x+=S===`in`?(-95-x)*Math.min(1,e*.42):0,g.position.x=x,n.set(`rails`,{gain:Math.min(.2,Math.abs(-95-x)*.004)}))}};n.loop(`hall`,{type:`brown`,freq:260,gain:.09}),await e.enter(C),e.sfx(`지하 승강장의 낮은 울림`,3),e.hint(`붉은 선까지 걸어간다`),await e.say(`그는 역까지 함께 산책하자고 졸랐다. 다리를 건너고 예로졸림스키에 대로를 지나서.`,{ref:`¶79`}),await e.say(`나란히 승강장을 누비며 바뀌는 행선지를 바라보았다.`,{ref:`¶79`}),await e.walkUntil(()=>y.pos.z>2.4,{after:25,fn:()=>{y.target||=new G(y.pos.x,0,3.1)}}),n.loop(`rails`,{type:`brown`,freq:210,gain:.02}),e.sfx(`열차가 들어온다`,4),S=`in`,await e.wait(e.auto?1:9),e.sfx(`객차를 센다. 하나, 둘, 셋`,3),await e.say(`와, 바르스다!`,{ref:`¶81`,quote:!0}),await e.say(`그렇게 폴란드 전국을 떠돌아다니면 안 돼.`,{ref:`¶83`,quote:!0}),await e.say(`알고 있어.`,{ref:`¶85`,quote:!0}),await e.say(`철도 회사 직원이 될 수 있게 도와줄 수 있어?`,{ref:`¶89`,quote:!0}),await e.say(`할 수 있지. 하지만 학교에 다녀야 해.`,{ref:`¶91`,quote:!0}),await e.say(`학교에 안 가고는 방법이 없나?`,{ref:`¶93`,quote:!0}),await e.wait(1),await e.say(`탈 수는 없다. 붉은 선 앞에 서 있을 뿐이다.`),await e.leave(1.2)}async function xo(e){let{e:t,a:n}=e,i=new r;i.background=new U(14674414),i.fog=new ye(15134448,8,40);let a=Va(5,4,2.6,{wall:J(15196104),floor:J(9071176,{map:kt(`#6a4c30`,[2,2])}),ceil:J(15525588),open:{n:!0}});i.add(a);let o=J(15196104);i.add(Y(1.4,2.6,.1,o,-1.8,1.3,-2),Y(1.4,2.6,.1,o,1.8,1.3,-2),Y(2.2,.9,.1,o,0,.45,-2),Y(2.2,.5,.1,o,0,2.35,-2),Y(2.2,.04,.04,J(16777215),0,1.45,-2),Y(.04,1.2,.04,J(16777215),0,1.5,-2));let s=X(40,16,new V({color:13624562,fog:!1}),0,6,-18);i.add(s,X(40,30,J(9413482),0,-.02,-17.05,0,-Math.PI/2),Y(18,4,6,J(13155750),-5,2,-16),Y(10,3,6,J(12036494),9,1.5,-17));let c=[];for(let e=0;e<5;e++){let t=new H(new N(3.2,2.6),new V({map:xt(90+e),transparent:!0,alphaTest:.3,color:6126138,side:2}));t.position.set(-1+e*.6,2+e%2*.4,-2.8-e*.3),t.rotation.z=1.2+e*.3,i.add(t),c.push(t)}let l=Ka({coat:4868674,h:1.7,skin:9075304});l.position.set(1.6,0,-9),i.add(l,Y(.03,1.4,.03,J(6965802),2.1,.7,-9)),i.add(new rt(16777215,12626048,1.6));let u=new de(16773328,2.4);u.position.set(1,4,-5),i.add(u);let d=Wa(1.3,.8,.74,{top:J(14273968)});d.position.set(0,0,.2),i.add(d);let f=Ga(15130832,!1);f.position.set(-.3,.76,.1),i.add(f);let p=Ka({coat:6969946,h:1.34,skin:12955026}),m=Ka({coat:4147797,h:1.36,skin:12626060});p.position.set(-.9,0,.2),p.rotation.y=1.5,m.position.set(.9,0,.2),m.rotation.y=-1.5;let h=Ka({coat:2763828,h:1.32,skin:12955026});h.position.set(0,0,-.55),i.add(p,m,h);let g=Y(.006,.006,.07,J(16777215),.72,1.07,.25);i.add(g);let _=t.controls;_.mode=`look`,_.pos.set(0,1.05,1.75),_.yaw=0,_.pitch=-.05,_.limit=[-.5,.5,-.25,.3];let v={scene:i,fov:50,post:{grain:.03,vig:.22,sat:.95,bloom:.5,exposure:1.05,tint:[1.02,1,.95]},imagineAll:!0,panel:[[`작은 마을 위로 5월의 햇살이 환히 비치고`,`¶101`],[`그리고 이 댁의 따님, 폴란드의 여왕이며 심리학의 여제, 드레브니차 마을의 여신이시여`,`¶99`]],marks:[Ea([0,2.1,-2.8],`낙엽송 가지 ¶101`,8),ka([0,2.3,0],`마을의 위치와 부엌은 상상`,9)],update(e,t){c.forEach((e,n)=>e.rotation.z+=Math.sin(t*.7+n)*6e-4),l.rotation.y=Math.sin(t*1.4)*.3}};n.loop(`birds`,{type:`white`,freq:4200,q:6,filter:`bandpass`,gain:.008,lfo:3,lfoDepth:.006}),await e.enter(v,{fade:2}),e.sfx(`몇 해 뒤의 5월. 새소리, 비질 소리`,4),await e.say(`몇 해 뒤, 이고르가 내 부모님을 찾아갔다.`,{ref:`¶97`}),await e.wait(1.5),await e.say(`철도 노선과 기관차와 역으로 얽힌 우주를 펼쳐 보였다.`,{ref:`¶97`}),await e.say(`유리 지붕 아래 승강장을 누비는 인파.`,{ref:`¶97`,quote:!0}),await e.say(`폴란드의 여왕이며 심리학의 여제, 드레브니차 마을의 여신이시여`,{ref:`¶99`,quote:!0}),n.stop(`birds`,2),await e.wait(1),await e.say(`엄마는 음식을 삼키지 못했고, 아빠의 담배도 고요히 얼어붙었다.`,{ref:`¶101`}),await e.wait(3),await e.leave(2)}async function So(e){await Co(e),await wo(e),await(await Eo(e)).first(),await Do(e),await ko(e),await(await Eo(e)).second()}async function Co(e){let{e:t,a:n}=e,i=new r;i.background=new U(790034),i.fog=new _e(1053206,.012),i.add(new rt(10134192,4868686,1.5));let a=[[11,-30,18,-30,12,-3,12,-3,18],[11,3,18,3,12,30,12,30,18],[11,-30,18,-3,18,-3,24,-30,24],[11,3,18,3,24,30,24,30,18],[11,-3,12,-3,14,3,14,3,12],[16,-24,-16,-24,-11,27,-13,27,-18],[16,-29,12,-24,12,-24,-16,-29,-16],[17,23,-13,23,12,30,12,30,-13]],o=ba();o.uniforms.uFog.value.set(1053206),o.uniforms.uFogD.value=.012,o.uniforms.uSky.value.set(.075,.08,.09),o.uniforms.uLit.value=.32,o.uniforms.uSnow.value=.7;let s=new H(ya(a),o);i.add(s);let c=X(90,70,J(16777215,{map:Qe([8,8]),color:10791085}),0,0,0,0,-Math.PI/2);i.add(c),i.add(Y(6,.3,6,J(13091250),-8,.15,-2),Y(5.6,.1,5.6,J(14209992),-8,.28,-2));for(let[e,t]of[[3,3],[10,-4]])i.add(Y(1.8,.05,.5,J(3811869),e,.46,t),Y(.05,.46,.4,J(546),e-.7,.23,t),Y(.05,.46,.4,J(546),e+.7,.23,t));for(let[e,t]of[[16,4],[17.6,4],[19.2,4]])i.add(Y(1.3,1.1,1.1,J(7170660,{map:ut([1,1])}),e,.55,t));[[-15,-8],[-3,-9],[13,-8],[0,8],[-16,6]].forEach(([e,t],n)=>{let r=new H(new N(9,14),new V({map:xt(70+n),transparent:!0,alphaTest:.4,side:2}));r.position.set(e,7,t),i.add(r);let a=r.clone();a.rotation.y=Math.PI/2,i.add(a)});let l=z(12),u=new R;for(let e=0;e<70;e++){let e=new H(new b(.03,6,5),J(15921126));e.position.set(-22+l()*6,.2+l()*.8,-8+l()*10),u.add(e)}i.add(u);for(let e=0;e<9;e++){let t=new H(new N(1.6,1.3),new V({map:xt(80+e),transparent:!0,alphaTest:.4,side:2}));t.position.set(-22+l()*6,.6,-8+l()*10),i.add(t)}let d=new Je(16760954,12,24,1.7);d.position.set(0,5.5,10),i.add(d);let f=Y(1.5,2.4,.1,J(3811869,{map:kt()}),12,1.2,-12.36);f.rotation.y=.04,i.add(f);let p=new Je(16760954,6,8,1.8);p.position.set(12,3,-11.2),i.add(p);let m=t.controls;m.mode=`walk`,m.surface=`snow`,m.speed=2.1,m.place(0,0,21,0,0),m.nav=[[-2.4,2.4,12,23],[-22,22,-10.9,12]],t.floorPick=[c];let h=Xa(i,[-24,24,0,14,-14,16],300,16777215,.035,.6,.35),g=Ja(i,()=>t.camera.position.clone().add(t.camera.getWorldDirection(new G).multiplyScalar(.5)).add(new G(0,-.15,0))),_=Ba(2,2.6,1,12,1.3,-11.9,`안나의 계단으로`,null,{range:3.6});i.add(_);let v={scene:i,fov:62,hots:[_],post:{grain:.05,vig:.5,sat:.55,bloom:.45},imagined:[{p:[0,4,0],d:60,r:40}],panel:[[`노비시비아트 거리에 있는 블리클레 과자점 뒤 첫 번째 대문, 넓은 안뜰, 부서진 사각형 모양으로 들어선 빌라 건물들.`,`¶117`],[`모래가 깔린 놀이터, 벤치 두 개, 몇 개의 콘크리트 쓰레기통 그리고 단풍나무와 스노베리 덤불`,`¶117`]],marks:[Ea([-8,1,-2],`놀이터 ¶117`,12),Ea([-19,1,-3],`스노베리 ¶117`,10),ka([0,9,0],`안뜰의 건물 배치는 상상`,40)],update(e){h(e),g(e)}};n.loop(`c`,{type:`brown`,freq:240,gain:.05}),await e.enter(v),e.sfx(`안뜰의 바람`,3),e.hint(`안뜰을 가로질러 불 켜진 건너편 대문으로`),await e.say(`블리클레 뒤 첫 번째 대문. 부서진 사각형의 넓은 안뜰.`,{ref:`¶117`}),await e.until(_,{timeout:75}),await e.leave(.8)}async function wo(e){e.hud.fade(!0,.01),e.sfx(`좁은 계단. 층계참마다 숨을 고른다`,8);for(let t=0;t<14;t++)e.a.step(`stair`),await e.wait(.32),t%3==2&&await e.wait(.5);await e.say(`너무 높아서 그녀는 밖으로 나가기를 몹시 꺼렸다.`,{ref:`¶117`})}function To(e,t,n=420){let r=z(5),i=J(723724),a=new ce(.8,2.2,.8),o=new ce(.05,3.6,.05),s=new ce(1.7,.04,.04),c=[];for(let r of e.data.bld){let e=r[1],i=r[2];Math.hypot(e-t[0],i-t[1])<n&&c.push(r)}let l=Math.min(c.length,700),u=(e,t)=>new ft(e,i,t),d=u(a,l),f=u(o,l),p=u(s,l*2),m=new Tt;c.slice(0,l).forEach((e,t)=>{let n=e[1]+(e[3]-e[1])*.4,i=e[2]+(e[4]-e[2])*.4;m.position.set(n,e[0]+1.1,i),m.rotation.set(0,0,0),m.updateMatrix(),d.setMatrixAt(t,m.matrix),m.position.set(n+2,e[0]+1.8,i+1),m.updateMatrix(),f.setMatrixAt(t,m.matrix);for(let a=0;a<2;a++)m.position.set(n+2,e[0]+2.8+a*.5,i+1),m.rotation.y=r()*.4,m.updateMatrix(),p.setMatrixAt(t*2+a,m.matrix)});let h=new R;h.add(d,f,p);for(let e of[d,f,p])e.frustumCulled=!1;return h}async function Eo(e){let{e:t,a:n,hud:i}=e,a=await Ta(e);a.data;let o=new r;o.background=new U(1974565),o.add(a.g),o.fog=a.fogObj;let s=a.streets(`Nowy Świat`).flat().sort((e,t)=>e[1]-t[1]),c=s[s.length>>1],l=[c[0]+34,c[1]],u=To(a,l);o.add(u);let d=new R;d.position.set(l[0],13.2,l[1]),d.rotation.y=Math.PI/2,o.add(d);let f=J(13222056,{roughness:.9}),p=J(11573884,{map:Ye([3,3])}),m=Va(5.4,4.2,2.7,{wall:f,floor:p,ceil:J(14209728),open:{n:!0,e:!0}});d.add(m),d.add(X(2.1,2.7,f,2.7,1.35,-1.05,-Math.PI/2),X(1.1,2.7,f,2.7,1.35,1.55,-Math.PI/2),X(1,.5,f,2.7,2.45,.5,-Math.PI/2));{let e=new R;e.position.set(3.7,0,.5),e.add(X(2,2.4,p,0,0,0,0,-Math.PI/2),X(2,2.4,J(14209728),0,2.7,0,0,Math.PI/2),X(2.4,2.7,f,1,1.35,0,-Math.PI/2),X(2,2.7,f,0,1.35,-1.2),X(2,2.7,f,0,1.35,1.2,Math.PI),Y(.6,.85,1.4,J(13617592),.65,.42,0),Y(.34,.04,.5,J(10132114,{metalness:.6}),.65,.87,.1),Y(.03,.22,.03,J(10132114,{metalness:.6}),.88,1,.1),Y(.3,.5,.9,J(8022610),.8,1.7,0));let t=new Je(16766362,1.4,4,1.8);t.position.set(0,2.2,0),e.add(t),d.add(e)}d.add(Y(.05,2.1,.9,J(2365971),-2.68,1.05,1.3),Y(.04,.5,.12,J(1776414),-2.62,1.5,1.05),Y(.04,.6,.14,J(2761766),-2.62,1.45,1.5)),d.add(Y(1.5,2.7,.15,f,-1.95,1.35,-2.1),Y(1.5,2.7,.15,f,1.95,1.35,-2.1),Y(2.4,.75,.15,f,0,.37,-2.1),Y(2.4,.35,.15,f,0,2.52,-2.1));for(let e of[-1.15,0,1.15])d.add(Y(.05,1.6,.05,J(15130832),e,1.55,-2.1));let h=X(2.5,1.8,new V({map:it(),transparent:!0,side:2,opacity:.72,color:11842216,depthWrite:!1}),0,1.55,-1.98);d.add(h);let g=new R,_=J(5523004,{roughness:1});g.add(Y(.8,.42,.75,_,0,.24,0),Y(.8,.75,.16,_,0,.72,.3),Y(.14,.3,.75,_,-.38,.56,0),Y(.14,.3,.75,_,.38,.56,0)),g.position.set(-1.5,0,-.4),g.rotation.y=.6,d.add(g),d.add(Y(1.7,.45,.7,_,1.9,.24,1.6));let v=Wa(.9,.9,.7,{top:J(3811869,{map:kt(`#3a2a1d`)})});v.position.set(.2,0,.1),d.add(v);let y=Ga();y.position.set(.05,.72,.2);let x=Ga();x.position.set(.42,.72,-.05),d.add(y,x);let S=new H(new b(.09,14,12),J(15525590,{roughness:.3}));S.position.set(.2,.8,-.15),S.scale.y=.8,d.add(S);let C=Y(.22,.004,.3,J(15262416,{map:pt(9)}),.2,.722,.28);d.add(C);let w=Ra(.14,.03,J(2763304),-2.6,1.9,1,16);w.rotation.z=Math.PI/2,d.add(w),d.add(Ra(.03,.14,J(9071162,{roughness:.3}),-1,.8,1.9,8),Y(.32,.1,.12,J(2365971),2.3,.05,2));let T=new Je(16766362,3.2,7,1.7);T.position.set(0,2.2,.3),d.add(T),d.add(new rt(13222064,3813928,.5));let E=Ka({coat:2762280,h:1.3,skin:11708056,bulk:.82,hair:9210500});E.position.set(.2,-.06,-.72),d.add(E);let D=new rt(9081244,2829098,.55);o.add(D),a.style({fog:1974565,fogD:.0016,sky:[.05,.054,.06],sun:[0,0,0],lit:.3,snow:.4,road:1579034,walk:2763306,ground:2763564,park:2763817,bank:2763304,win:1,sunDir:[-.6,.35,.2]});let O=t.controls;O.mode=`look`,O.parent=d,O.pos.set(.45,1.18,1.7),O.yaw=0,O.pitch=-.1,O.limit=[-1.2,1.2,-.5,.4],d.updateMatrixWorld(!0);let k={scene:o,fov:56,far:6e3,keep:!0,hots:[],post:{grain:.04,vig:.42,sat:.6,bloom:.35,tint:[1,.98,.93]},imagined:[{p:[l[0],14,l[1]],d:7,r:7}],panel:[[`이 높이에서는 구호를 읽을 수 없었고, 시위대의 외침은 골목골목의 미로 속으로 흩어져`,`¶157`],[`도시는 지붕과 안테나, 굴뚝으로 이루어져 있었다.`,`¶157`],[`낮게 깔린 가을 구름 사이로 햇빛이 스며 나와 주택가의 지붕들 위로 따스하게 흘러내리고 있었다.`,`¶177`]],marks:[Ea([l[0]-2,14.5,l[1]],`레이스 커튼 ¶117`,6),Ea([l[0],14,l[1]+.2],`금테 찻잔 ¶175, 흰 사기 주전자 ¶153`,5),ka([l[0]-3,15,l[1]-2],`5층 동은 가상의 건물. 재건 높이와 다름`,9),Da([l[0]-200,30,l[1]],`지붕 윤곽은 현재 OSM`,500)],update(e,t){}};n.loop(`crowd`,{type:`brown`,freq:300,q:.8,gain:.05,lfo:.4,lfoDepth:.025});let A=()=>{o.remove(a.g),d.clear()},j=async(t=2.2)=>{let n=O.pos.clone(),r=new G(0,1.5,-1.55),i=performance.now();await new Promise(a=>{let o=setInterval(()=>{let s=Math.min(1,(performance.now()-i)/(t*1e3*e.speed+1));O.pos.lerpVectors(n,r,s*s*(3-2*s)),O.yaw*=.95,O.pitch*=.95,s>=1&&(clearInterval(o),a())},16)})};return{async first(){await e.enter(k),e.hint(`끌어서 고개를 돌린다`),e.sfx(`먼 외침이 뜻을 잃고 흩어진다`,5),await e.say(`아가, 어쩌면 좋지? 밤새도록 한숨도 못 자.`,{ref:`¶123 줄임`}),await e.say(`바깥 공기를 너무 적게 쐬시는 게 아닐까요?`,{ref:`¶125`,quote:!0}),await e.say(`아냐, 아가. 저녁마다 적어도 30분은 꼭 환기를 하는걸.`,{ref:`¶127`,quote:!0}),await e.say(`약을 처방받아보시는 건 어떠세요?`,{ref:`¶133`,quote:!0}),await e.say(`그건 절대 안 돼, 절대로.`,{ref:`¶137`,quote:!0}),await j(),O.limit=[-.9,.9,-.6,.4],await e.say(`저 아래 세상에서는 아무 일도 벌어지고 있지 않았다.`,{ref:`¶157`,quote:!0}),await e.say(`보이니, 저 지평선 너머로 풍경이 흐려지는 게?`,{ref:`¶159`,quote:!0}),await e.say(`이런 날씨에는 항상 그렇잖아요.`,{ref:`¶161`,quote:!0}),await e.say(`내가 제안할 수 있는 건 고작 산책뿐이었다.`,{ref:`¶141`}),await i.fade(!0,e.auto?.02:1),n.stopAll(.5),A(),e.dispose(),i.hint(``)},async second(){await e.enter(k),e.hint(``),await e.say(`그녀는 싱크대에서 찻잔을 조심스레 씻었다.`,{ref:`¶165`}),await e.say(`나는 꿈에서 세상을 봐.`,{ref:`¶165`,quote:!0}),await e.say(`맛없는 마드라스 차. 세상을 위해 그녀의 잠이 여덟 시간 필요하다고 했다.`,{ref:`¶175`}),await e.say(`십자말풀이 종이의 칸을 하나씩 잘라내게 했다.`,{ref:`¶171`}),e.hint(`탁자 위 종이를 클릭한다`);for(let r=0;r<3;r++){let i=Ba(.34,.12,.4,.2,.76,.28,[`칸을 잘라낸다`,`또 잘라낸다`,`또 잘라낸다`][r],null,{range:2.4});d.add(i),k.hots=[i],t.hots=k.hots,await e.until(i,{timeout:25}),n.hit({freq:2600,q:2,dur:.05,gain:.06}),await e.wait(.5),d.remove(i)}e.hint(``),await e.say(`그러고는 카드를 꺼냈다.`,{ref:`¶175`}),n.clink(),await e.wait(2),await e.say(`어느 날 나는 아주머니가 잠든 모습을 보았다.`,{ref:`¶177`}),E.position.set(-1.5,-.02,-.4),E.rotation.y=.6,E.rotation.z=.08,E.head.rotation.z=.4,n.stop(`crowd`,3),T.intensity=1.2,k.post.tint=[1,.98,.93],await e.wait(2);{d.updateMatrixWorld(!0);let n=O.pos.clone().applyMatrix4(d.matrixWorld),r=O.yaw+Math.PI/2;O.parent=null,O.mode=`walk`,O.surface=`wood`,O.speed=1.1,O.place(n.x,13.2,n.z,r,0),O.nav=[[l[0]-1.72,l[0]+1.9,l[1]-2.4,l[1]+2.4]],O.blocks=[[l[0]-.4,l[0]+.6,l[1]-.8,l[1]+.4,13.2,16],[l[0]-1.05,l[0]+.1,l[1]+1,l[1]+2,13.2,16]],t.floorPick=[m.floorMesh],e.hint(`창가까지 걷는다`),await e.walkUntil(()=>O.pos.x<l[0]-1.1,{after:30,fn:()=>{O.target||=O.pos.z>l[1]-1.1?new G(O.pos.x,13.2,l[1]-1.3):new G(l[0]-1.5,13.2,l[1]-1.3)}}),O.target=null,e.hint(``);let i=new G(O.pos.x,14.82,O.pos.z);d.worldToLocal(i),O.mode=`look`,O.parent=d,O.nav=null,O.blocks=null,t.floorPick=null,O.pos.copy(i),O.yaw=0,O.pitch=0,O.limit=[-.9,.9,-.6,.4],await j(1.2)}await e.say(`확인하지 않을 수 없었다.`,{ref:`¶177`,quote:!0});let r=Ba(2.4,1.8,.3,0,1.55,-1.9,`레이스를 걷는다`,null,{range:6});d.add(r),k.hots=[r],t.hots=k.hots,await e.until(r,{timeout:25}),e.hint(``),n.hit({freq:5e3,q:.5,dur:.3,gain:.02}),n.loop(`wind2`,{type:`brown`,freq:420,gain:.035,lfo:.12,lfoDepth:.015}),e.sfx(`창틈의 바람`,3);let s=performance.now();k.update=()=>{let n=Math.min(1,(performance.now()-s)/4e3/e.speed);h.position.x=-n*2.2,a.style({sun:[n*1.1,n*.82,n*.5],fog:new U(.12+.42*n,.13+.33*n,.15+.18*n),fogD:.0016-n*6e-4,snow:.1,lit:.3-n*.25}),D.intensity=.55+n*.6,o.background.setRGB(.12+.5*n,.13+.4*n,.15+.25*n),t.renderer.toneMappingExposure=1+n*.25},await e.wait(4),await e.say(`낮게 깔린 가을 구름 사이로 햇빛이 지붕들 위로 따스하게 흘러내렸다.`,{ref:`¶177`}),await e.wait(4),await i.fade(!0,e.auto?.02:2),n.stopAll(.5),A(),e.dispose(),i.hint(``),a.style({sunDir:[.4,.6,.3]})}}}async function Do(e){let{e:t,a:n,hud:i}=e,a=await Ta(e),o=new r;o.background=new U(1382170),o.add(a.g),o.fog=a.fogObj,o.add(new rt(11976137,8026228,2.1)),a.style({fog:1513757,fogD:.012,sky:[.055,.058,.064],sun:[0,0,0],lit:.2,snow:.1,road:2105636,walk:5131594,ground:3815993,park:2763816,bank:2763304});let s,c,l,u,d,f,p=5.2,m=(e,t)=>{s=e,c=t,l=new L(t[0]-e[0],t[1]-e[1]),u=l.length(),l.normalize(),d=l.y,f=-l.x},h=a.streets(`Foksal`).flat().sort((e,t)=>e[0]-t[0]);m(h[0],h.at(-1));let g=(e,t)=>{let n=(e-s[0])*l.x+(t-s[1])*l.y,r=(e-s[0])*d+(t-s[1])*f;return n>0&&n<u&&Math.abs(r-p)<2.2},_=new At({map:vt([1,12]),roughness:.9,color:13158080}),v=new H(new N(4.6,330),_);v.rotation.x=-Math.PI/2;let y=new R;y.add(v),o.add(y);let b=()=>{y.position.set((s[0]+c[0])/2+d*p,.12,(s[1]+c[1])/2+f*p),y.rotation.y=Math.atan2(l.x,l.y)};b();let x=Ka({coat:3025452,h:1.58,skin:9339768,bulk:.85,hair:8026228,hat:`beret`});o.add(x);let S=2,C=[];[10,26,44].forEach((e,t)=>{let n=s[0]+l.x*e+d*p+.4,r=s[1]+l.y*e+f*p,i=new H(new N(1.2,1.2),new V({map:Oo(t),transparent:!0,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.set(n,.14,r),o.add(i);let a=Ba(1.4,.3,1.4,n,.2,r,t==1?`녹슨 자국을 살핀다`:`금 간 틈을 살핀다`,null,{range:4.4});o.add(a),C.push(a)});let w=t.controls;w.mode=`walk`,w.surface=`hard`,w.speed=1.05,w.stepEvery=.55,w.place(s[0]+d*p+l.x*2,.12,s[1]+f*p+l.y*2,Math.atan2(-l.x,-l.y),-.3),w.nav=g;let T=e.pick();T.position.y=.12,o.add(T),t.floorPick=[T];let E=Ja(o,()=>x.position.clone().add(new G(0,1.5,0))),D={scene:o,fov:60,far:800,keep:!0,hots:[...C],post:{grain:.05,vig:.5,sat:.42,bloom:.3},imagined:[{p:[s[0],1,s[1]],d:1200,r:1200}],panel:[[`우리는 폭살 거리를 지나 코페르니크 거리를 걸었고`,`¶143`],[`보도블록 하나하나, 난간과 계단까지 꼼꼼히 살폈고`,`¶145`],[`온갖 음영의 잿빛으로 뒤덮인 도시`,`¶147`],[`묘지 위에 집을 지으면 안 됐어.`,`¶151`]],marks:[Ea([s[0]+l.x*10,1,s[1]+l.y*10],`폭살 거리 ¶143`,22),ka([s[0]+l.x*12+d*p,.4,s[1]+l.y*12+f*p],`보도 무늬는 상상`,12)],update(e,t){E(e);let n=(w.pos.x-s[0])*l.x+(w.pos.z-s[1])*l.y;S+=(n+2.2-S)*Math.min(1,e*.8),x.position.set(s[0]+l.x*S+d*4.3,.12,s[1]+l.y*S+f*4.3),x.rotation.y=Math.atan2(l.x,l.y),x.position.y=.12+Math.abs(Math.sin(t*3.2))*.012}};n.loop(`c`,{type:`brown`,freq:260,gain:.06}),await e.enter(D),e.sfx(`구두 소리, 먼 차 소리`,3),e.hint(`안나의 속도로 걷는다. 발밑의 금을 클릭한다`),await e.say(`폭살 거리. 그녀는 보도블록을 하나하나 살폈다.`,{ref:`¶143, ¶145`});let O=0;for(let e of C)e.userData.hot.use=null;await Promise.all(C.map(t=>e.until(t,{timeout:70}).then(async()=>{O++,n.hit({freq:900,q:2,dur:.05,gain:.1}),await e.say(O==1?`안나가 구두 끝으로 틈을 두드렸다.`:O==2?`녹슨 자국. 의미심장하면서도 슬픈 눈길.`:`이제 나도 금을 찾고 있었다.`,O<3?{ref:`¶145`}:{})}))),await e.say(`어느 날 그녀가 어디 사느냐고 물었다. 게토 구역의 자멘호프 거리라고 하자 입을 틀어막았다.`,{ref:`¶149`}),await e.say(`묘지 위에 집을 지으면 안 됐어.`,{ref:`¶151`,quote:!0}),await i.fade(!0,e.auto?.02:.9);let k=a.streets(`Mikołaja Kopernika`).flat().sort((e,t)=>e[1]-t[1]),A=k[k.length>>1];m(A,k.find(e=>Math.hypot(e[0]-A[0],e[1]-A[1])>70)||k[0]),b(),C.forEach(e=>e.visible=!1),w.place(s[0]+d*p+l.x*2,.12,s[1]+f*p+l.y*2,Math.atan2(-l.x,-l.y),-.08),S=2;let j=Math.atan2(l.x,l.y),M=s[0]+l.x*16+d*7.6,ee=s[1]+l.y*16+f*7.6,te=X(9,2.6,new At({color:1712166,roughness:.1,transparent:!0,opacity:.32,side:2}),M,1.6,ee,j+Math.PI/2);o.add(te);{let e=M+d*1.5,t=ee+f*1.5,n=Y(11,7,.3,J(2895408,{emissive:658188}),e,3.5,t);n.rotation.y=j+Math.PI/2,o.add(n);for(let[e,t]of[[2.98,.22],[.2,.4]]){let n=Y(9.4,t,.25,J(4868678),M,e,ee);n.rotation.y=j+Math.PI/2,o.add(n)}let r=new Je(13222048,5,9,1.7);r.position.set(M+d*.8,2.6,ee+f*.8),o.add(r)}let ne=[];for(let e=0;e<7;e++){let t=Ka({coat:9080728,h:1.62,skin:9080728,hair:9080728});t.traverse(e=>{e.isMesh&&(e.material=e.material.clone(),e.material.transparent=!0,e.material.opacity=.3,e.material.depthWrite=!1)}),t.position.set(s[0]+l.x*(11+e*1.3)+d*8.3,.1,s[1]+l.y*(11+e*1.3)+f*8.3),t.rotation.y=j,o.add(t),ne.push(t)}let re=Ba(9,2.6,.5,M,1.6,ee,`진열장 앞에 선다`,null,{range:6.5});re.rotation.y=te.rotation.y,o.add(re),D.hots=[re],t.hots=D.hots,await i.fade(!1,e.auto?.02:.9),e.hint(`코페르니크 거리. 진열장까지 걷는다`),await e.say(`코페르니크 거리를 걷는다.`,{ref:`¶143`}),await e.until(re,{timeout:45}),await e.say(`어둑어둑한 대형 진열장의 유리에 사람들의 모습이 두세 겹씩 겹쳐서 비쳤다.`,{ref:`¶147`,quote:!0}),e.hint(``),await e.say(`내가 본 도시는 언제나 잿빛이었다.`,{ref:`¶147`,quote:!0}),await e.say(`시비엥토크시스카 거리를 따라 다시 노비시비아트로 돌아오곤 했다. 때로는 강 쪽으로.`,{ref:`¶143`}),await e.leave(1.5),o.remove(a.g)}function Oo(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=z(e+2);n.strokeStyle=e==1?`#3a1d0c`:`#0b0a08`,n.lineWidth=3,n.beginPath();let i=30,a=30+r()*160;for(n.moveTo(i,a);i<226;)i+=20+r()*20,a+=(r()-.5)*44,n.lineTo(i,a);n.stroke(),e==1&&(n.fillStyle=`rgba(120,60,20,.55)`,n.beginPath(),n.ellipse(128,128,64,34,.4,0,7),n.fill());let o=new f(t);return o.colorSpace=ee,o}async function ko(e){let{e:t,a:n}=e,i=new r;i.background=new U(14474450),i.fog=new ye(14276812,20,190),i.add(new rt(16777215,11971984,1.5));let a=X(500,500,J(13157552,{map:Qe([18,18])}),0,0,-120,0,-Math.PI/2);i.add(a);for(let e=0;e<46;e++){let t=new H(new N(9,12),new V({map:xt(120+e),transparent:!0,alphaTest:.4,color:5921352,side:2}));t.position.set(-90+e*4+e%3*2,6,-70-e%5*14),i.add(t)}for(let e=0;e<6;e++)for(let t=0;t<26;t++)i.add(Y(.06,1.2,.06,J(4864554),-30+t*2.4,.6,-160-e*3));let o=0,s=0,c={scene:i,fov:60,post:{grain:.03,vig:.2,sat:.7,bloom:.6,exposure:1},imagineAll:!0,panel:[[`처음엔 모자를 벗고, 이어 장갑을 벗고`,`¶143`]],marks:[Ea([0,2,-70],`버드나무, 포도밭 ¶143. 시각 형식은 해석`,80)],update(e){o-=e*5.5,s+=e/32,t.camera.position.set(0,1.62+Math.sin(o*.8)*.015,o),t.camera.rotation.set(0,0,0),i.background.setRGB(.85+s*.13,.85+s*.1,.8+s*.02),i.fog.color.copy(i.background)}};n.loop(`w`,{type:`brown`,freq:500,gain:.03}),await e.enter(c,{fade:2.5}),e.sfx(`들판의 바람`,3),await e.say(`강가의 덤불을 따라, 버드나무가 서 있는 경계를 넘어.`,{ref:`¶143`}),await e.say(`처음엔 모자를 벗고,`,{ref:`¶143`,quote:!0,dur:2.4}),await e.say(`이어 장갑을 벗고,`,{ref:`¶143`,quote:!0,dur:2.2}),await e.say(`포도밭 가장자리에서 겨울 외투마저.`,{ref:`¶143`}),await e.wait(1.5),await e.leave(2)}async function Ao(e){let{e:t,a:n,hud:r}=e,i=Za(e,{night:!0}),{s:a,g:o,F:s,nav:c}=i,l=t.controls,u=[];for(let e=0;e<10;e++){let t=Ka({coat:1381658,skin:4538684,h:1.7});t.position.set(-14+e*3.1,s[1],(e%2?1:-1)*1.2),t.rotation.y=e%2?Math.PI:0,o.add(t),u.push(t)}let d=Ka({coat:2302752,h:1.85,skin:4867648,bulk:.8});d.position.set(11,s[1],0),d.rotation.y=-Math.PI/2+Math.PI,o.add(d),d.visible=!1,l.mode=`walk`,l.surface=`concrete`,l.speed=1.7,l.place(-1,s[1],.4,-Math.PI/2,-.1),l.nav=c[1],l.limit=null,t.floorPick=i.walkMeshes;let f=0,p=0,m=0,h=new Je(4025343,0,30,1.6);h.position.set(-8,s[2]+3,9),o.add(h);let g={scene:a,fov:60,hots:[],post:{grain:.05,vig:.6,sat:.5,bloom:.35,exposure:.85},imagineAll:!0,panel:[[`옛 게슈타포 본부의 벽 안에서, 어둑어둑한 중2층 복도에 음산하게 울려 퍼졌다.`,`¶109`],[`겁에 질린 우리는 벽에 몸을 바짝 붙였다.`,`¶109`]],marks:[Ea([0,s[1]+2,-1.4],`어두운 층계참과 복도 ¶109`,12),ka([5,s[1]+2,0],`치릴은 소리와 뒷모습만 쓴다`,14)],update(e,n){f=Math.max(0,f-e*4),i.relight(t.camera.position,(.72+.12*Math.sin(n*50))*(1-f*.8)),p>0&&(l.pos.z+=(-1.05-l.pos.z)*Math.min(1,e*3)),m&&(h.intensity=Math.max(0,Math.sin(n*6))*14)}};n.loop(`hum`,{type:`white`,freq:120,q:12,filter:`bandpass`,gain:.03}),n.loop(`murmur`,{type:`brown`,freq:500,gain:.06}),await e.enter(g),r.showTools(!0),e.hint(`복도를 걷는다`),await e.say(`겉보기에는 아무것도 달라지지 않는 듯했다.`,{ref:`¶107`,quote:!0}),await e.say(`치릴은 늘 구석에 서서 바닥만 응시했다. 우리는 무심코 그 시선을 따라 내려다보았다.`,{ref:`¶103`}),l.lockMove=!0,l.pitch=-.5,await e.wait(2.5),l.pitch=-.1,e.hint(``),n.stop(`murmur`,.1),await e.wait(1),n.howl(.12,2.6),f=1,e.sfx(`복도 끝에서 사람의 것 같지 않은 울부짖음`,4),await e.wait(.6),p=1,d.visible=!0,await e.say(`어느 날 저녁, 치릴이 광란에 빠졌다.`,{ref:`¶109`});let _=0,v=setInterval(()=>{d.position.x+=.28,++_>26&&(clearInterval(v),d.visible=!1)},60);n.thud(.5),await e.wait(1),n.howl(.14,3),f=1,await e.say(`겁에 질린 우리는 벽에 몸을 바짝 붙였다.`,{ref:`¶109`,quote:!0}),n.thud(.6),await e.say(`B가 달려갔다. “치릴, 치릴.” 재우려는 듯 단조롭게.`,{ref:`¶111`}),n.howl(.09,2.4),await e.say(`해산하라는 지시가 내렸다.`,{ref:`¶111`}),await r.fade(!0,e.auto?.02:.8),l.mode=`look`,l.pos.set(-9,s[2]+1.62,9.4),l.yaw=Math.PI,l.pitch=-.05,p=0,l.limit=[Math.PI-1.1,Math.PI+1.1,-.4,.4],await r.fade(!1,e.auto?.02:1),e.sfx(`벽에 무언가 둔탁하게 부딪친다`,5);for(let t=0;t<5;t++)n.thud(.42),await e.wait(1.1);await e.say(`어디에 있든 그 소리는 계속 들려왔다.`,{ref:`¶111`}),m=1,e.sfx(`구급차의 푸른 불빛이 천장을 스친다`,4),await e.wait(1.5),await r.fade(!0,e.auto?.02:.7),l.pos.set(-16,s[0]+1.62,.2),l.yaw=-Math.PI/2,l.limit=[-Math.PI/2-.4,-Math.PI/2+.4,-.3,.3],l.pos.set(-16,s[0]+1.62,.2),d.visible=!0,d.scale.setScalar(1),d.position.set(-1,s[0],0),d.armL.visible=d.armR.visible=!1,d.children[0].material=J(13223608),d.rotation.y=Math.PI/2;let y=[-.62,.62].map(e=>{let t=Ka({coat:2369066,skin:4538684});return t.position.set(-1,s[0],e),t.rotation.y=Math.PI/2,o.add(t),t}),b=0,x=setInterval(()=>{b+=.045,d.position.x=-1+b,y.forEach(e=>e.position.x=-1+b)},60);await r.fade(!1,e.auto?.02:.7),await e.say(`곧이어 구속복 차림의 치릴이 끌려 나오는 모습을 보았다.`,{ref:`¶113`}),clearInterval(x),await e.wait(1),await e.say(`이제 제발 모든 게 끝났으면.`,{ref:`¶115`,quote:!0}),await e.leave(1.6)}async function jo(e){let{e:t,a:n,hud:i}=e,a=new r;a.background=new U(65793),a.fog=new _e(722693,.05);let o=(e,t=[2,1])=>J(16777215,{map:pt(e,t),roughness:.95}),s=4.8,c=4.2,l=2.55,u=o(2,[2.4,1.1]),d=new R;a.add(d);let f=X(s,c,o(3,[2.4,2]),0,0,0,0,-Math.PI/2),p=X(s,c,J(3814443),0,l,0,0,Math.PI/2);d.add(f,p,X(c,l,u,-4.8/2,l/2,0,Math.PI/2),X(c,l,u,s/2,l/2,0,-Math.PI/2),X(s,l,u,0,l/2,c/2,Math.PI));for(let[e,t]of[[-2.05,.7],[0,.7],[2.05,.7]])d.add(X(t,l,u,e,l/2,-4.2/2));d.add(X(s,.55,u,0,.27,-2.099),X(s,.3,u,0,2.4,-2.099));let m=new U(658708),h=X(14,9,new V({color:m,fog:!1}),0,2,-6);d.add(h);let g=[];for(let e=0;e<6;e++){let t=new H(new N(4.5,8),new V({map:Pe(),transparent:!0,alphaTest:.3,side:2,fog:!1}));t.position.set(-4+e*1.7,1.5,-3.2-e%3*.6),d.add(t),g.push(t)}let _=[],v=e=>{let t=X(1.34,1.72,J(16777215,{map:tt(),roughness:1}),e,1.4,-2.06),n=X(.6,1.1,J(16777215,{map:Se(),roughness:1}),e+.34,1.55,-4.2/2+.07);return d.add(t,n),_.push(t,n),{bl:t,tw:n}},y=v(-1),b=v(1),x=X(1.3,1.7,new V({map:He(),transparent:!0,opacity:0,depthWrite:!1}),-1,1.4,-2.08),S=x.clone();S.position.x=1,d.add(x,S);let C=Y(.9,2.05,.06,o(4,[1,1]),-2.399,1.03,1.3);C.rotation.y=Math.PI/2,d.add(C);let w=new R;w.add(Y(.55,.85,.55,J(9210492,{roughness:.5}),0,.42,0),Y(.5,.02,.5,J(546),0,.86,0),Ra(.1,.02,J(273),-.12,.88,-.1,14),Ra(.1,.02,J(273),.12,.88,.1,14)),w.position.set(2.1,0,1.65),w.rotation.y=-Math.PI/2,d.add(w);let T=Ra(.1,.13,J(7303018,{metalness:.6,roughness:.35}),2.1,.95,1.75,14);d.add(T);let D=Y(.1,.05,.03,J(12658477),2.39,1.1,1.1);d.add(Ra(.012,.5,J(1911),2.39,1.3,1.1,8),D);let O=new R,k=new V({color:2625542}),A=Ra(.3,.04,J(7825994,{metalness:.6}),0,.35,0,20);A.rotation.x=Math.PI/2,O.add(A);let j=new H(new me(.2,.02,8,24),k),M=new H(new me(.12,.02,8,24),k);j.position.set(0,.35,.03),M.position.set(0,.35,.03),O.add(j,M,Y(.24,.03,.2,J(4866100),0,.04,0),Y(.03,.3,.03,J(4866100),0,.18,0)),O.position.set(.3,0,-.4),O.rotation.y=.5,d.add(O);let ee=new Je(16748352,0,9,1.6);ee.position.set(.3,.5,-.1),d.add(ee);let te=Y(.9,.32,1.9,J(2762528),-1.8,.16,-.8);d.add(te);let ne=z(8);for(let e=0;e<46;e++){let t=Y(.5+ne()*.2,.01+ne()*.2,.36,J(16777215,{map:pt(10+e%4)}),-2+ne()*4.2,.05+ne()*.2,.9+ne()*1.1*(ne()>.5?1:-.2));t.rotation.y=ne()*2.5,d.add(t)}let re=Ra(.04,.1,J(12630180),.7,.05,.1,12);d.add(re);let ie=new Je(13220234,0,6,1.8);ie.position.set(0,2.3,.4),d.add(ie),d.add(new rt(3813414,1182728,.25));let ae=Ka({coat:6184282,h:1.56,bulk:.62,skin:11576983,hair:11842734});ae.add(Y(.15,.05,.34,J(4864554),-.11,.03,.05),Y(.15,.05,.34,J(4864554),.11,.03,.05)),ae.position.set(-1.4,0,.8),ae.rotation.y=1.4,d.add(ae);let P=t.controls;P.mode=`look`,P.pos.set(-1.8,1.5,1.25),P.yaw=-1.55,P.pitch=0,P.limit=null;let se={hL:0,heater:0},ce=[Ea([-2.3,1.2,1.3],`신문지를 덧바른 문 ¶181`,6),Ea([.3,.5,-.4],`전기난로 ¶189. 주황 열선은 각주 23`,5),Ea([-1,1.5,-2],`담요와 수건 커튼 ¶187`,6),{g:`D`,pos:[0,2.3,0],t:`방의 치수와 건물은 상상`,r:8}],le=null,ue=0,F={scene:a,fov:48,hots:[],imagineAll:!0,post:{grain:.07,vig:.7,sat:.7,bloom:.7,tint:[1,.96,.88],exposure:.95},panel:[[`그는 저들이 아침부터 자신을 감시하고 있다고 말했다.`,`¶189`],[`얼어붙은 대도시 위로 떠오른 비눗방울처럼`,`¶209`],[`그가 나에게 전염시켰고, 나는 감염되었다.`,`¶225`]],marks:ce,update(e,r){ee.intensity=se.heater*(4.5+Math.sin(r*2)*.3);let i=se.heater;if(k.color.setRGB(.15+i*3.4,.05+i*.72,.02+i*.05),ue+=e,le&&le.length){let n=le[0],r=Math.atan2(-(n[0]-P.pos.x),-(n[2]-P.pos.z)),i=Math.atan2(n[1]-P.pos.y,Math.hypot(n[0]-P.pos.x,n[2]-P.pos.z)),a=r-P.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),P.yaw+=a*e*.32+Math.sin(ue*2.3)*e*.09,P.pitch+=(i-P.pitch)*e*.3,t.grade.uniforms.uPulse.value=.6+.45*Math.sin(ue*1.7)}ae.position.y=Math.sin(r*22)*se.shiver*.004,ae.head.rotation.y=fe(),n.set(`heater`,{gain:.04*se.heater})}};se.shiver=1;let fe=()=>{let e=P.pos;return Math.atan2(e.x-ae.position.x,e.z-ae.position.z)-ae.rotation.y};i.imagine(!0),i.allowGrades(!1),n.loop(`wind`,{type:`brown`,freq:220,gain:.05}),await e.enter({...F,post:{...F.post,exposure:.3,bloom:.2},update:F.update},{fade:1}),t.current=F,t.post(F.post),t.renderer.toneMappingExposure=.3,e.sfx(`신문지를 덧바른 문 뒤의 숨소리`,4),await e.say(`체 게바라는 한동안 문을 열지 않았다.`,{ref:`¶181`}),await e.say(`암호?`,{ref:`¶183`,quote:!0,dur:1.6}),await e.ask(`암호`,`머릿속에 제일 먼저 떠오른 단어를 말한다.`,`하늘, 잎사귀, 철제 군용 식기…`),n.hit({freq:1700,q:3,dur:.06,gain:.2}),await e.say(`잠시 머뭇거림 끝에 자물쇠가 딸깍 소리를 내며 문이 열렸다.`,{ref:`¶185`}),P.pos.set(-2,1.5,1.75),P.yaw=-1.85,t.renderer.toneMappingExposure=.85,ie.intensity=4,F.post.exposure=.85,await e.say(`허리의 기괴한 장식들이 사라지고 잿빛 운동복만 걸친 그는 벌거벗은 것처럼 보였다.`,{ref:`¶187`}),await e.say(`아이로 살아보지도 못하고, 갓난아이에서 곧장 노인으로 건너뛴 것 같았다.`,{ref:`¶187`}),ae.position.set(.4,0,.5),ae.rotation.y=-1.2,await e.say(`그는 저들이 아침부터 자신을 감시하고 있다고 말했다. 나무 위에서, 쌍안경과 망원렌즈로.`,{ref:`¶189`});let pe=(e,n,r,i,a,o,s,c)=>{let l=Ba(e,n,r,i,a,o,s,null,{range:6,...c});return d.add(l),F.hots=[l],t.hots=F.hots,l};await e.face(.3,.4,-.4),e.hint(`클릭하거나 E를 누른다`),await e.until(pe(.8,.8,.8,.3,.4,-.4,`전기난로를 켠다`),{timeout:30}),n.loop(`heater`,{type:`white`,freq:80,q:9,filter:`bandpass`,gain:0});let he=0,ge=setInterval(()=>{he+=.04,se.heater=Math.min(1,he),he>=1&&clearInterval(ge)},60);e.sfx(`난로의 열선이 달아오른다`,3),await e.wait(1.5),await e.face(2.1,1,1.7),await e.until(pe(.6,.5,.6,2.1,1,1.7,`하얀 바르슈치 가루를 끓인다`),{timeout:30}),e.hint(``),n.loop(`boil`,{type:`white`,freq:900,q:1,gain:.012}),await e.wait(2),n.stop(`boil`,.5),await e.say(`병원에 가고 싶어?`,{ref:`¶191`,quote:!0}),await e.say(`그는 이미 늦었다고 대답했다.`,{ref:`¶193`}),await e.say(`도움을 요청할게.`,{ref:`¶195`,quote:!0}),ae.position.set(-2,0,1.3),ae.rotation.y=Math.PI/2,n.thud(.3),e.sfx(`그가 문으로 달려가 온몸으로 막아선다`,3),P.pos.set(-.6,1.5,1.1),P.yaw=1.5,await e.say(`안 돼. 넌 여기서 나갈 수 없어. 이미 포위망에 걸려들었으니까.`,{ref:`¶199`,quote:!0}),await e.say(`누군가에게 알려야 했지만, 이 남자에게 내가 기준점이 되어야 했다.`,{ref:`¶203`}),await e.face(-2,1.3,1.3),e.hint(`클릭하거나 E를 누른다`),await e.until(pe(.7,1.6,.7,-2,1,1.3,`등에 담요를 덮어 준다`),{timeout:30}),e.hint(``),P.pos.set(-1.5,1,1.1),P.yaw=1.45,P.pitch=-.05,ae.position.y=-.5,ae.rotation.y=Math.PI*.4,se.shiver=.4,n.loop(`breath`,{type:`brown`,freq:380,gain:.05,lfo:.22,lfoDepth:.04}),await e.say(`나의 두려움이 연기처럼 흩어졌다. 나는 넓고 평평한 대지가 되었다.`,{ref:`¶203`}),await e.say(`자, 체 게바라, 이제 그만 자자.`,{ref:`¶205`,quote:!0});let ve=[[`버스 정류장`,[.1,.2]],[`가로등`,[.32,.62]],[`다리의 난간`,[.5,.5]],[`전차의 선로`,[.44,.56]],[`프란추스카`,[.52,.53]],[`오브론추프`,[.53,.51]],[`발레치니`,[.51,.49]],[`아텐스카`,[.54,.54]],[`사스카`,[.55,.52]],[`카토비체`,[.42,.86]],[`그단스크`,[.45,.1]],[`바우브지흐`,[.2,.76]],[`루블린`,[.72,.7]],[`비아위스토크`,[.8,.32]],[`롱고보`,[.66,.2]],[`칼리시 근교의 도로`,[.3,.54]],[`들판의 기차`,[.4,.4]],[`정박지의 배`,[.5,.06]],[`조선소`,[.42,.13]],[`텔레비전 속 아나운서`,[.62,.44]]],ye=new R,be=[],xe=z(21);for(let[e]of ve){let e=new E(new oe({map:ze(`#ffd49a`,64),transparent:!0,depthTest:!1,blending:2}));e.position.set((xe()-.5)*2.4,(xe()-.5)*1.5,-1.9),e.scale.setScalar(.14),e.renderOrder=20,ye.add(e),be.push(e)}t.camera.add(ye),a.add(t.camera),ye.visible=!1,i.fade(!0,e.auto?.02:2),await e.wait(2),ie.intensity=0,ye.visible=!0,t.renderer.toneMappingExposure=.42,ee.distance=5,await i.fade(!1,e.auto?.02:2),n.loop(`litany`,{type:`brown`,freq:150,gain:.03}),e.sfx(`낮은 울림`,3),await e.say(`잠자리에 둘 채비를 하는 사물들의 이름을 단조롭게 읊조렸다.`,{ref:`¶207`}),e.hint(`클릭하거나 스페이스로 이름을 부른다`);for(let t=0;t<ve.length;t++){let r=ve[t][0];await new Promise(t=>{let n=!1,a=()=>{n||(n=!0,F.onClick=null,F.onKey=null,F.onNext=null,clearTimeout(o),t())};F.onClick=a,F.onKey=a,F.onNext=a,i.line(r+`…`);let o=setTimeout(a,e.auto?30:6500);e.auto&&setTimeout(a,10)}),n.beep({freq:220-t*2,dur:.4,gain:.012}),se.heater=Math.max(.28,1-(t+1)*.04);let a=1,o=be[t],s=setInterval(()=>{a-=.06,o.material.opacity=Math.max(0,a),a<=0&&clearInterval(s)},40);await e.wait(.5)}e.hint(``),i.clearLine(),await e.wait(1.5),ye.visible=!1,t.camera.remove(ye),await e.say(`사람들은 얼굴로 손을 올려 졸린 눈을 비빈다. 조선소들이 잠든다.`,{ref:`¶207`}),await e.say(`사방이 신문지로 뒤덮인 방에서 우리는 전기 태양을 곁에 두고 둥실 떠 있었다.`,{ref:`¶209`}),await e.say(`그의 몸이 점점 힘을 잃고 무겁게 가라앉았다.`,{ref:`¶209`}),e.sfx(`두 사람의 숨소리. 방은 움직이지 않는다`,5),await e.say(`얼어붙은 대도시 위로 떠오른 비눗방울처럼`,{ref:`¶209`,quote:!0}),await e.wait(2),n.set(`breath`,{gain:.02}),await Mo(e,a,d,{C1:y,C2:b,hlight:ee,bk:h,pops:g}),se.heater=.7,F.post.pulse=.6,F.post.grain=.11,F.post.exposure=.78,t.post(F.post),await e.say(`그가 옳았다. 저들이 우리를 감시하고 있다.`,{ref:`¶211`}),await e.say(`야간 투시경의 가늘고 긴 눈동자들이 모든 창문을 겨누고 있다.`,{ref:`¶213`,quote:!0}),P.pos.set(-.4,1.5,.6),P.yaw=.2;let Ce=[[1.34,1.55,-2],[2.3,1.1,1.1],[-2.3,1,1.3]];le=[...Ce],e.hint(``);let we=[Ba(.7,1.2,.2,1.34,1.55,-2,`수건 커튼을 정리한다`,null,{range:7}),Ba(.3,.3,.3,2.3,1.1,1.1,`가스 밸브를 잠근다`,null,{range:7}),Ba(.3,2,1,-2.3,1,1.3,`문이 잠겼는지 확인한다`,null,{range:7})];we.forEach(e=>d.add(e)),F.hots=we,t.hots=we;let Te=[],Ee={0:()=>{b.tw.position.x=b.bl.position.x,n.hit({freq:3e3,q:.7,dur:.2,gain:.03})},1:()=>{D.rotation.z=Math.PI/2,n.hit({freq:1200,q:2,dur:.06,gain:.08})},2:()=>{n.hit({freq:1500,q:3,dur:.05,gain:.1})}};await new Promise(n=>{let r=0;we.forEach((e,t)=>{let i=e.userData.hot;i.use=()=>{Ee[t](),Te.push(t),le=le.filter(e=>e!==Ce[t]),++r==3&&n()}}),setTimeout(()=>{n()},e.auto?30:6e4),e.auto&&we.forEach(e=>t.useHot(e))}),F.hots=[],t.hots=[],le=null,t.grade.uniforms.uPulse.value=0,e.sfx(`그가 다 알고 있다는 눈빛으로 움직임을 주시한다`,4),await e.wait(2),Te.length?await e.say(`나는 벌떡 일어나 그렇게 했다.`,{ref:`¶215`}):await e.say(`나는 벌떡 일어나 수건을 정리하고 가스 밸브를 잠그고 문을 확인했다.`,{ref:`¶215`}),x.material.opacity=0;let De=0;await i.fade(!0,e.auto?.02:2.2),n.stop(`breath`,1),F.post.pulse=0,F.post.grain=.06,t.post({...F.post,exposure:.7}),P.pos.set(-.3,.25,.3),P.yaw=.25,P.pitch=.5,ae.position.set(-.7,-.42,.5),ae.rotation.y=0,ae.rotation.x=-1.4,se.shiver=0,await e.wait(.5),await i.fade(!1,e.auto?.02:2),await e.say(`밤새도록 기묘한 생각들이 피어났다. 유리창에 서리꽃이 번지듯이.`,{ref:`¶219`});let Oe=setInterval(()=>{De=Math.min(.9,De+.012),x.material.opacity=S.material.opacity=De},60);await e.wait(5),clearInterval(Oe),await i.fade(!0,e.auto?.02:1.6),se.heater=.4;for(let e of[y.tw,b.tw,y.bl,b.bl])e.visible=!1;h.material.color.set(12174543),g.forEach(e=>e.material.color.set(2106408));let ke=new de(13622246,1.6);ke.position.set(0,1.6,-4),d.add(ke,ke.target),ke.target.position.set(0,1,2);let Ae=new rt(12175058,3815994,.8);d.add(Ae),ae.rotation.x=0,ae.position.set(1.65,0,1.65),ae.rotation.y=Math.PI/2;let je=Y(.1,.18,.05,J(8022602),-.26,.95,.1);ae.add(je),P.pos.set(-1.2,.9,0),P.yaw=-1.05,P.pitch=.08,n.loop(`kettle`,{type:`white`,freq:2400,q:7,filter:`bandpass`,gain:.02}),F.post={grain:.05,vig:.5,sat:.45,bloom:.3,tint:[.94,.98,1.04],exposure:1},t.post(F.post),e.sfx(`주전자의 물이 끓는 소리`,4),await i.fade(!1,e.auto?.02:2.4),await e.say(`눈을 뜨니 창문의 수건은 걷혀 있었다. 서늘하고 단단한 금속성의 겨울 빛.`,{ref:`¶219, ¶221`}),n.stop(`kettle`,1),await e.say(`이제 다 끝났어.`,{ref:`¶223`,quote:!0}),await e.say(`그들은 갔어. 하지만 곧 다시 올 거야.`,{ref:`¶223`,quote:!0}),await e.say(`불안 발작과 정신병적 삽화를 겪은 거라고 스스로를 진단했다.`,{ref:`¶225`}),await e.say(`체 게바라, 병원에 가자. 내가 전화를 걸게.`,{ref:`¶227`,quote:!0}),await e.say(`그는 아무런 저항 없이 순순히 짐을 챙기기 시작했다.`,{ref:`¶229`,quote:!0}),await e.leave(1.5)}async function Mo(e,t,n,{C1:i,C2:a,hlight:o}){let{e:s,a:c,hud:l}=e,u=new r;u.background=new U(658708),u.fog=new _e(724501,.006);let d=X(40,20,new V({color:6975100,map:ut([3,3])}),0,8,-14);u.add(d);for(let e of[-2.4,2.4]){let t=Y(1.6,2,.1,new V({color:2757640}),e,9,-13.9);u.add(t);let n=Y(.04,1.8,.12,new V({color:16747066}),e+.5,9,-13.86);u.add(n);let r=Y(1.5,.03,.12,new V({color:13396522}),e,8.05,-13.86);u.add(r)}for(let e=-3;e<3;e++)for(let t=0;t<3;t++)t!=1&&u.add(Y(1.6,2,.08,new V({color:e*t%4==1?9071155:460809}),e*4.8+2.4,4+t*5,-13.95));for(let e=0;e<3;e++){let t=new H(new N(10,14),new V({map:Pe(),transparent:!0,alphaTest:.3,side:2}));t.scale.setScalar(.8),t.position.set(e==1?-9:e==0?8.5:-11,7,3-e*1.5),u.add(t)}u.add(new rt(8358816,2106412,1.5));let f=s.current,p={scene:u,fov:13,imagineAll:!0,post:{grain:.09,vig:.5,sat:.2,bloom:.3,tint:[.9,1,.9],exposure:.9},update(e,t){s.camera.position.set(Math.sin(t*.5)*.1,9.4+Math.sin(t*.8)*.04,17),s.camera.lookAt(.2+Math.sin(t*.7)*.3,9,-14)}};await l.fade(!0,e.auto?.02:.25),s.controls.mode=`none`,s.show(p),l.imagine(!0),l.viewfinder(!0,`300 mm`),await l.fade(!1,e.auto?.02:.15),c.loop(`rad`,{type:`white`,freq:1600,q:5,filter:`bandpass`,gain:.01}),await e.wait(5.2),c.stop(`rad`,.1),await l.fade(!0,e.auto?.02:.15),l.viewfinder(!1),s.show(f),s.controls.mode=`look`,s.controls.pos.set(-1.5,1,1.1),await l.fade(!1,e.auto?.02:.5)}function No(){let e=new R,t=J(2961702,{roughness:.8}),n=J(855308),r=Y(2.8,1.4,7.2,t,0,1.5,0);e.add(r);let i=Y(2.5,.9,1.4,t,0,1.4,-4);i.rotation.x=.45,e.add(i,Y(1.1,.5,1.3,t,0,2.4,1.2),Ra(.05,1.4,J(1710870),0,2.7,.6,8));for(let t=0;t<4;t++)for(let r of[-1,1]){let i=Ra(.58,.34,n,r*1.45,.58,-2.4+t*1.6,14);i.rotation.z=Math.PI/2,e.add(i)}let a=Y(2,.1,.1,new V({color:16773320}),0,1.7,-3.7);return e.add(a),e}async function Po(e){let{e:t,a:n,hud:i}=e,a=await Ta(e);a.data;let o=new r;o.background=new U(13227746),o.add(a.g),o.fog=a.fogObj;let s=new rt(14674418,11186358,1.3);o.add(s);let c=new de(15922416,1.2);c.position.set(.4,.5,.5),o.add(c),a.bridgeMat.map=Qe([1,1]),a.bridgeMat.color.set(14870508),a.bridgeMat.needsUpdate=!0,a.style({fog:13819366,fogD:.0021,sky:[.21,.23,.25],sun:[.75,.74,.7],lit:.04,snow:1,road:13094355,walk:14541543,ground:14870508,park:14541800,water:1712680,bank:14673129,sunDir:[.4,.5,.5],win:.8});let l=a.bridgeLine,u=l.at(-1),d=l[0],f=[...l],p=[u[0]+70,u[1]-22],m=[d[0]+30,d[1]-10],h=(e,t)=>{let n=1e9;for(let r=0;r<f.length-1;r++){let i=f[r],a=f[r+1],o=a[0]-i[0],s=a[1]-i[1],c=Math.max(0,Math.min(1,((e-i[0])*o+(t-i[1])*s)/(o*o+s*s)));n=Math.min(n,Math.hypot(i[0]+o*c-e,i[1]+s*c-t))}return n},g=new R;o.add(g);let _=J(3816767,{metalness:.5,roughness:.6}),v=J(15397108,{roughness:.9}),y=[];for(let e=0;e<l.length-1;e++){let t=l[e],n=l[e+1],r=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.floor(r/5),a=(n[1]-t[1])/r,o=-(n[0]-t[0])/r;for(let e=0;e<i;e++){let r=e/i,s=t[0]+(n[0]-t[0])*r,c=t[1]+(n[1]-t[1])*r;for(let e of[-11.6,11.6])y.push([s+a*e,c+o*e,Math.atan2(n[0]-t[0],n[1]-t[1])])}for(let e of[-11.6,11.6]){let i=Y(.1,.09,r,v,(t[0]+n[0])/2+a*e,1.1,(t[1]+n[1])/2+o*e);i.rotation.y=Math.atan2(n[0]-t[0],n[1]-t[1]),g.add(i)}}let b=new ce(.09,1.1,.09),x=new ft(b,_,y.length),S=new Tt;y.forEach((e,t)=>{S.position.set(e[0],.55,e[1]),S.updateMatrix(),x.setMatrixAt(t,S.matrix)}),x.frustumCulled=!1,g.add(x);let C=[];for(let e=0;e<y.length;e+=9){let t=y[e];g.add(Ra(.07,7.5,_,t[0],3.75,t[1],8)),C.push(t)}let w=new R,T=J(3820120,{roughness:.5});w.add(Y(1,2.3,.05,new At({color:10465466,transparent:!0,opacity:.4,roughness:.1}),0,1.2,.5),Y(1,.1,1,T,0,2.35,0),Y(.05,2.3,1,T,-.5,1.2,0),Y(.05,2.3,1,T,.5,1.2,0),Y(1,2.3,.05,T,0,1.2,-.5),Y(.32,.5,.14,J(2105892),0,1.4,-.42)),w.position.set(p[0]-8,0,p[1]-16),g.add(w);let E=Ra(.04,2.8,_,p[0]-22,1.4,p[1]-12,8);g.add(E,Y(.7,.5,.04,J(14209208,{map:Ee(`T`,{w:200,h:160,fg:`#8e231b`,bg:`#d8d0b8`,font:`800 110px sans-serif`})}),p[0]-22,2.9,p[1]-12));let D=new Je(16747066,30,20,1.8),O=[d[0]-60,d[1]+8];D.position.set(O[0],1.2,O[1]+6),g.add(D);for(let e=0;e<3;e++){let t=Ka({coat:2764322,h:1.76,skin:4867648});t.position.set(O[0]+Math.sin(e*2)*1.2,0,O[1]+6+Math.cos(e*2)*1.2),g.add(t)}let k=a.trees(a.sample(a.streets(`Aleja Księcia Józefa Poniatowskiego`).concat(a.streets(`Aleje Jerozolimskie`))),{frost:1,h:11,seed:30}),A=Xa(o,[p[0]-700,p[0]+120,0,12,p[1]-260,p[1]+260],700,16777215,.06,.7,.25),j=[];for(let e=0;e<6;e++){let t=No();t.position.set(d[0]-340-e*16,0,d[1]+22),t.rotation.y=-Math.PI/2+0,t.visible=!1,g.add(t),j.push(t)}let M=t.controls;M.mode=`walk`,M.surface=`snow`,M.speed=2.8,M.stepEvery=.8,M.place(p[0],0,p[1],Math.PI/2+.5,0);let ee=(e,t,n,r)=>{let i=r[0]-n[0],a=r[1]-n[1],o=Math.max(0,Math.min(1,((e-n[0])*i+(t-n[1])*a)/(i*i+a*a)));return Math.hypot(n[0]+i*o-e,n[1]+a*o-t)},N=[p[0]-8,p[1]-16];M.nav=(e,t)=>e>m[0]-2&&e<p[0]+30&&(h(e,t)<9.5||Math.hypot(e-u[0],t-u[1])<32||ee(e,t,u,p)<26||Math.hypot(e-N[0],t-N[1])<10);let te=Ja(o,()=>t.camera.position.clone().add(t.camera.getWorldDirection(new G).multiplyScalar(.5)).add(new G(0,-.15,0))),ne=0,re=0,ie={scene:o,fov:60,far:2200,keep:!0,hots:[],post:{grain:.03,vig:.22,sat:.5,bloom:.3,exposure:.95,tint:[.97,1,1.03]},imagineAll:!0,panel:[[`거리는 한산했다.`,`¶229`],[`전화기가 고장 났는지 아무런 응답이 없었다.`,`¶231`]],marks:[Oa([820,3,-70],`다리는 포니아토프스키 추정`,120),Da([d[0]-60,2,d[1]+14],`코크스 화로와 군인 [S47]`,260),Da([d[0]-140,3,d[1]+22],`바퀴형 장갑차 [S47]. 대수와 형식은 상상`,420),ka([w.position.x,2.6,w.position.z],`부스의 위치는 상상`,30)],update(e,t){if(A(e),te(e),ne>=1){let e=M.pos.x-d[0],t=B.clamp(1-(e-40)/360,0,1);n.set(`apc`,{gain:.04+t*.5,freq:90+t*80}),n.set(`apc2`,{gain:t*.1})}ne>=2&&(re+=e,j.forEach((e,n)=>{e.visible=!0,e.position.x=d[0]-340-n*16+Math.min(re*12.5,320),e.position.y=Math.sin(t*20+n)*.01}))}};i.allowGrades(!1),i.showTools(!1),i.noPanel=!i.forceGrades;let ae=e.pick();o.add(ae),t.floorPick=[ae],n.loop(`wind`,{type:`brown`,freq:420,gain:.07,lfo:.1,lfoDepth:.03}),await e.enter(ie,{fade:2.2}),e.hint(`W 키나 눈길 클릭으로 걷는다`),await e.say(`거리는 한산했다. 하지만 오늘은 일요일, 집회가 있는 날이다.`,{ref:`¶229`}),await e.say(`그래, 전화를 걸어 어젯밤에 그녀라도 제대로 잠을 잤는지 물어봐야겠다.`,{ref:`¶229`});let P=Ba(1.2,2.4,1.2,w.position.x,1.2,w.position.z,`공중전화 부스에 들어가 번호를 누른다`,null,{range:6});g.add(P),ie.hots=[P],t.hots=ie.hots,await e.face(w.position.x,1.4,w.position.z),e.hint(`공중전화 부스까지 걸어가 클릭한다`),await e.until(P,{timeout:90});for(let e=0;e<3;e++)n.hit({freq:1400,q:6,dur:.04,gain:.08,when:e*.22});e.sfx(`아무 소리도 나지 않는다`,4),await e.wait(1.5),n.phoneDead(),await e.say(`전화기가 고장 났는지 아무런 응답이 없었다.`,{ref:`¶231`,quote:!0});let oe=Ba(1,3,1,p[0]-22,1.4,p[1]-12,`전차를 기다린다`,null,{range:6});g.add(oe),ie.hots=[oe],t.hots=ie.hots,await e.face(p[0]-22,2,p[1]-12),e.hint(`전차 정류장으로 간다`),await e.until(oe,{timeout:60}),e.hint(``),await e.wait(e.auto?1:11),await e.say(`전차도 오지 않았다.`,{ref:`¶231`,quote:!0}),ie.hots=[],t.hots=[],await e.say(`나는 다리를 건너 도시 반대편으로 향했다.`,{ref:`¶231`,quote:!0}),await e.face(d[0],2,d[1]),e.hint(`다리를 따라 걷는다`);let se=()=>{!M.target&&!M.lockMove&&(M.target=new G(...M.pos.x>u[0]+2||h(M.pos.x,M.pos.z)>8?[u[0],0,u[1]]:[m[0],0,m[1]]))};await e.wait(0),n.thunder(`apc`),n.set(`apc`,{gain:.03}),ne=1,e.sfx(`아주 먼 곳의 낮은 울림`,5),setTimeout(()=>e.hint(``),9e3),e.auto&&(M.pos.x=d[0]+160),await e.walkUntil(()=>M.pos.x<d[0]+250,{after:40,fn:se}),ne=2,e.sfx(`강 건너에서 낮은 울림이 커진다`,5),await e.walkUntil(()=>M.pos.x<m[0]+24,{after:1,fn:se}),M.lockMove=!0,M.yaw=Math.PI/2+.25,await e.wait(e.auto?1:7),e.sfx(`천둥처럼 굉음`,3),await e.wait(e.auto?.5:6),i.imagine(!0),await i.fade(!0,.05),n.stopAll(.05),i.clearLine(),await e.wait(4),e.dispose(),o.remove(a.g),a.g.remove(k)}var Fo={imagined:[{n:1,gap:`원룸의 위치`,fill:`강 동쪽 주거지. 구역 이름은 쓰지 않는다. 전차로 가고, 걸어서 다리로 나갈 수 있다. 지도에는 점을 찍지 않는다`,show:`구역`,until:`폴란드어 원문에 위치 단서가 있을 때`},{n:2,gap:`원룸 건물과 방`,fill:`1960년대 4층 공동주택의 맨 위층. 문, 짧은 복도, 방 하나, 벽에 붙은 가스레인지. 창은 둘이고 포플러 가지가 창 높이까지 차서 바깥을 가린다. 방은 약 20㎡`,show:`장면`,until:`1970–80년대 평면 자료가 있을 때`},{n:3,gap:`M의 건물`,fill:`탐카 거리 언덕 위쪽의 전쟁 전 공동주택. 단독 빌라가 아니다. 창은 강 쪽을 향한다. 실제 조망보다 넓게 보이는 M의 창은 7장의 연출을 따른다`,show:`구역`,until:`원어가 단독 주택으로 확인될 때`},{n:4,gap:`층수를 세는 법`,fill:`러시아어판 숫자를 기준으로 삼아 지상층을 1로 센다. M의 집과 화장실은 세 번째 층, 안나의 집은 다섯 번째 층으로 짓는다. 층수 표지는 숫자를 쓰지 않는다. ¶17과 ¶69의 "2층"은 인용문에서만 한국어판대로 쓴다`,show:`구역`,until:`폴란드어 원문의 층 표기를 볼 때`},{n:5,gap:`안나의 건물`,fill:`지상층 위 2개 층으로 재건된 거리 건물 뒤에 선 5층 동. 블리클레의 실제 번지를 가리키지 않는 가상의 동이다. 발코니가 거리 건물의 지붕선 위로 트여 노비시비아트와 지붕, 안테나, 굴뚝, 지평선을 내려다본다`,show:`구역`,until:`노비시비아트 재건 도면이나 안뜰 사진이 있을 때`},{n:6,gap:`블리클레 뒤 안뜰`,fill:`아치 통로를 지나면 네 변 길이가 다른 사각형 안뜰이 나온다. 원문의 놀이터, 벤치 두 개, 콘크리트 쓰레기통, 단풍나무, 스노베리를 그 안에 놓는다. 거리 쪽 한 면만 재건 건물의 뒷면이고 나머지 면은 별개의 건물이다`,show:`구역`,until:`안뜰 사진이나 현지 답사가 있을 때`},{n:7,gap:`안나의 집 내부`,fill:`좁은 복도, 방, 작은 부엌, 안락의자는 원문을 따른다. 낡은 소파, 벽시계, 약병, 문가의 외출용 구두를 더한다`,show:`구역`,until:`비슷한 시기 노비시비아트 주택 내부 사진이 있을 때`},{n:8,gap:`농성장 층 배치`,fill:`지상층에 출입문, 당직자 자리, 매점, 공중전화 두 대, 탁구대를 둔다. 그 위층에 강당, 흡연 복도, 게시판을 둔다. 맨 위 층에 탁자를 침대로 쓰는 강의실과 화장실을 둔다. 층 사이 계단참에 짧은 복도가 이어져 중2층을 이룬다. 이곳은 어둡다`,show:`구역`,until:`스타프키 건물 실측이나 평면이 있을 때`},{n:9,gap:`연구소 뜨락`,fill:`문 밖의 작은 뜰. 앙상한 나무 몇 그루, 빈 자전거 거치대, 희미한 외등 하나`,show:`구역`,until:`1981년 사진이 있을 때`},{n:10,gap:`파업의 진행`,fill:`한국어판의 "교대식"을 기준으로 삼는다. 파업은 수주간 이어졌고 마지막 주말에 형태가 바뀌었다고 가정한다. 화면에 날짜를 내지 않고, 열람실에도 달력이 아니라 이 가정 한 줄로만 싣는다`,show:`내부`,until:`파업 일지나 폴란드어 원문이 있을 때`},{n:11,gap:`12월의 날씨`,fill:`초순에는 진눈깨비와 젖은 보도, 이어서 눈이 쌓인다. 12월 13일의 눈과 혹한은 기록을 따르고 [B], 그날 하늘은 한 자료가 말하는 맑음을 택한다 [C]`,show:`구역`,until:`IMGW 일별 자료가 있을 때`},{n:12,gap:`분식집 '바퀴벌레'`,fill:`대학 뒤 골목으로 위치를 둔다. M의 창에 지점만 표시한다`,show:`구역`,until:`위치 자료가 있을 때`},{n:13,gap:`도넛 가게`,fill:`마르흘레프스키 거리의 한 지점으로 둔다. M의 창에 지점만 표시한다`,show:`구역`,until:`위치 자료가 있을 때`},{n:14,gap:`세탁실 클럽`,fill:`¶45의 클럽과 ¶79의 동네 클럽을 한 곳으로 합친다. 강 동쪽 공동주택의 지하 세탁실로, 시멘트 바닥과 배수구, 노출 배관 아래에 탁구대, 체스판, 카드, 십자말풀이 종이가 있다`,show:`구역`,until:`두 곳이 다르다는 근거가 나올 때`},{n:15,gap:`아마토르스카 실내`,fill:`어두운 나무 벽, 작은 탁자, 입구의 외투걸이, 낮은 바. 창가 자리와 구석 자리는 원문을 따른다`,show:`구역`,until:`1981년 실내 사진이 있을 때`},{n:16,gap:`시위 행렬의 장소`,fill:`크라코프스키에프셰드미에시치에의 대학 앞 구간. 거리에서는 파업 현수막이 읽히고, 안나의 5층에서는 행렬이 보이지 않고 외침만 흩어진다`,show:`구역`,until:`해당 장면의 기록이 있을 때`},{n:17,gap:`서술자와 이고르의 집`,fill:`서술자의 집은 자멘호프 거리 1950년대 공동주택으로 두고 내부는 보여 주지 않는다. 이고르의 집은 부모와 사는 강 동쪽 아파트로, 유리장의 도자기와 레이스 깔개로 채운다`,show:`구역`,until:`비슷한 시기 주택 내부 사진이 있을 때`},{n:18,gap:`고향 마을`,fill:`덧붙이는 지명 표기는 쓰지 않고 작은 마을로만 둔다. ¶99의 인용은 예외로 "드레브니차"를 쓰되, 러시아어판에는 마을 이름이 없다는 점을 열람실에 적는다. 기차로 몇 시간 걸리는 곳의 낮은 집 부엌이다. 낙엽송 가지와 집 앞을 쓰는 이웃은 원문을 따른다`,show:`장면`,until:`폴란드어 원문에서 대목을 확인할 때`},{n:19,gap:`버스와 전차`,fill:`버스는 1970년대풍 굴절버스, 전차는 빨강과 크림색 2량 편성으로 짓는다. 제조사와 형식 이름은 쓰지 않는다. 배차 간격은 화면과 열람실에 수치로 내지 않는다`,show:`구역`,until:`1981년 차량 사진과 시간표가 있을 때`},{n:20,gap:`공중전화 부스`,fill:`강 동쪽 대로의 전차 정류장 옆. 전화기가 응답하지 않고 전차가 오지 않는 두 대목이 한자리에서 이어진다`,show:`구역`,until:`해당 지점의 1981년 사진이 있을 때`},{n:21,gap:`결말의 시점`,fill:`포니아토프스키 다리 상판의 서쪽 마지막 구간에 서서 이어지는 대로를 정면으로 본다. "대로에서 봄"과 "다리 위에서 봄" 두 번역이 함께 성립한다`,show:`장면`,until:`폴란드어 원문의 ¶231 대응 문장을 볼 때`},{n:22,gap:`장갑차 행렬`,fill:`바퀴형 장갑차는 기록을 따른다 [B]. 대수는 6대, 세로 한 줄로 관람자 쪽으로 밀려온다. 병사의 얼굴은 보이지 않는다. 형식은 특정하지 않는다`,show:`구역`,until:`그날 사진이나 영상이 있을 때`},{n:23,gap:`생활 사물`,fill:`전기난로, 공중전화, 담배, 신문, 머그잔은 1970년대풍으로 짓는다. 상표와 기사 내용은 쓰지 않는다`,show:`구역`,until:`사물 자료가 있을 때`},{n:24,gap:`가을날의 빛`,fill:`안나 장면은 겨울 저녁이 기본이다. ¶177의 창가 확인만 낮은 가을 구름 사이의 햇빛으로 바꾼다. 원문의 가을은 [A]이고, 빛의 모양이 상상이다`,show:`구역`,until:`없음. 연출 선택이다`},{n:25,gap:`기념비와 정류장`,fill:`정류장은 표지판과 얼어붙은 보도만 짓는다. 기념비는 어둠 속의 큰 윤곽으로만 두고 조각을 만들지 않는다. 게토 영웅 기념비라는 식별은 [C]이며 열람실에서만 말한다`,show:`구역`,until:`1981년 정류장 위치 자료가 있을 때`},{n:26,gap:`역 승강장`,fill:`역 이름을 쓰지 않는다. 낮은 콘크리트 천장의 지하 승강장, 줄지어 바뀌는 행선지 전광판, 붉은 선, 어두운 초록 객차를 짓는다. 행선지는 원문의 도시만 쓴다. 파업 기간과의 관계는 정하지 않는다`,show:`구역`,until:`1981년 역 사진이 있을 때`},{n:27,gap:`사스카켕파 거리`,fill:`나무가 늘어선 2–3층 주택가. 서술자가 돌보는 집은 특정하지 않는다`,show:`구역`,until:`1980년대 거리 사진이 있을 때`},{n:28,gap:`보행 루프의 거리`,fill:`도로 선형은 지도를 따른다. 보도 판석, 난간, 대형 진열장의 세부는 상상이다`,show:`구역`,until:`1981년 거리 사진이 있을 때`},{n:29,gap:`농성장의 사람과 소도구`,fill:`얼굴 없는 실루엣으로 둔다. 치릴이 끌려간 방은 복도 끝의 닫힌 문으로만 둔다. 구급차는 창 밖의 불빛으로만 보인다. 벽보는 글자가 읽히지 않는다`,show:`구역`,until:`학생 회고나 사진이 있을 때`},{n:30,gap:`거리 정면`,fill:`도시 장면의 파사드는 지도 윤곽 위에 지은 벽면이다. 창의 배열과 색은 상상이다. 블리클레는 이름 없는 과자점 진열창으로 둔다`,show:`구역`,until:`재건 도면이나 거리 사진이 있을 때`},{n:31,gap:`안나 건물의 계단실`,fill:`승강기 없는 좁은 계단. 층마다 창 하나와 어두운 층계참이 있다`,show:`구역`,until:`안뜰 답사가 있을 때`},{n:32,gap:`버스 창밖`,fill:`군중과 차량은 어둠 속 실루엣이다. 가판대와 담배 상자의 소년은 원문을 따른다. 붉은 현수막의 "파업"만 읽히고 그 밖의 글자는 읽히지 않는다`,show:`구역`,until:`대학 정문의 파업 사진이 있을 때`},{n:33,gap:`인물 외형`,fill:`모든 인물을 얼굴 없는 실루엣으로 짓는다. 체 게바라의 복장, 안나의 코트처럼 원문이 말하는 부분만 형태를 준다. 치릴은 소리와 뒷모습만 쓴다`,show:`구역`,until:`없음. 윤리 선택이다`},{n:34,gap:`음악`,fill:`밥 말리 음악은 쓰지 않는다. 벽 너머의 먹먹한 2박 리듬으로 대신한다. 원문의 기타 소리도 합성음이다`,show:`내부`,until:`권리를 확보할 때`}],sources:[{id:`S1`,name:`TRASBUS, 바르샤바 대중교통 연표 111번`,urls:[`https://www.trasbus.com/liniabus111.htm`]},{id:`S2`,name:`바르샤바대 심리학부 연혁, 1980–1989`,urls:[`http://psych.uw.edu.pl/o-nas/historia/czasy-solidarnosci-i-stanu-wojennego-lata-1980-1989/`]},{id:`S3`,name:`바르샤바대, 계엄 선포 기념 회고`,urls:[`https://www.uw.edu.pl/rocznica-wprowadzenia-stanu-wojennego/`]},{id:`S4`,name:`Umschlagplatz Monument (영문 위키백과)`,urls:[`https://en.wikipedia.org/wiki/Umschlagplatz_Monument`]},{id:`S5`,name:`Umschlagplatz (영문 위키백과)`,urls:[`https://en.wikipedia.org/wiki/Umschlagplatz`]},{id:`S6`,name:`바르샤바 게토 박물관, The Silent Eyewitness`,urls:[`https://1943.pl/en/artykul/the-silent-eyewitness-in-the-register-of-historical-monuments`]},{id:`S7`,name:`USC Warsaw Ghetto 페이지`,urls:[`https://iwalk-dev.usc.edu/warszawa-ghetto-warszawa/warszawa-ghetto-warszawa-wall`]},{id:`S9`,name:`Martial law in Poland (영문 위키백과)`,urls:[`https://en.wikipedia.org/wiki/Martial_law_in_Poland`]},{id:`S10`,name:`폴란드 라디오, 계엄 39주년`,urls:[`https://polskieradio.pl/395/7784/artykul/2639386,poland-marks-39th-anniversary-of-imposition-of-martial-law`]},{id:`S11`,name:`OSA 아카이브(본문에서는 인용하지 않음, 탐색 기록), RFE와 1981년 계엄`,urls:[`https://legacy.osaarchivum.org/blog/%E2%80%9Call-the-telephone-and-telex-lines-are-disconnected%E2%80%9D-%E2%80%93-rfe-and-the-1981-martial-law-in-poland`]},{id:`S12`,name:`Ulica Nowy Świat (폴란드어 위키백과)`,urls:[`https://pl.wikipedia.org/wiki/Ulica_Nowy_%C5%9Awiat_w_Warszawie`]},{id:`S13`,name:`아마토르스카 현 주소 목록`,urls:[`https://mapa.targeo.pl/amatorska-nowy-swiat-21-warszawa~4666542/kawiarnia/adres`]},{id:`S14`,name:`인민공화국 시기 밤 문화 기사`,urls:[`https://www.se.pl/wiadomosci/exclusive/zycie-nocne-w-prl-kultowe-kluby-striptiz-i-morze-alkoholu-aa-SDYb-K5GV-naVw.html`]},{id:`S15`,name:`Cafe Amatorska 포크살 지점`,urls:[`https://restaurantguru.com/Amatorska-Warsaw`]},{id:`S16`,name:`내셔널지오그래픽 폴란드판, 바르샤바 최고(最古) 과자점`,urls:[`https://www.national-geographic.pl/traveler/smaki-swiata/najstarsza-cukiernia-w-warszawie-slynie-ze-znakomitych-paczkow-przyciaga-tlumy-nie-tylko-w-tlusty-czwartek/`]},{id:`S17`,name:`위키미디어 공용, Nowy Świat Street`,urls:[`https://commons.wikimedia.org/wiki/Nowy_%C5%9Awiat_Street_in_Warsaw?uselang=pl`]},{id:`S19`,name:`Ulica Ludwika Zamenhofa (폴란드어 위키백과)`,urls:[`https://pl.wikipedia.org/wiki/Ulica_Ludwika_Zamenhofa_w_Warszawie`]},{id:`S20`,name:`Monument to the Ghetto Heroes (영문 위키백과)`,urls:[`https://en.wikipedia.org/wiki/Monument_to_the_Ghetto_Heroes`]},{id:`S21`,name:`Culture.pl, Modernista na gruzach`,urls:[`https://culture.pl/pl/artykul/miasto-po-getcie`]},{id:`S22`,name:`KB.pl, 무라누프 지하의 도시`,urls:[`https://kb.pl/aktualnosci/ciekawostki/warszawa-ktorej-nie-widac-golym-okiem/`]},{id:`S23`,name:`Drewnica 동음이의 문서`,urls:[`https://pl.wikipedia.org/wiki/Drewnica`]},{id:`S24`,name:`Drewnica (Ząbki)`,urls:[`https://pl.wikipedia.org/wiki/Drewnica_(Z%C4%85bki)`]},{id:`S25`,name:`Wojskowy Instytut Medyczny`,urls:[`https://pl.wikipedia.org/wiki/Wojskowy_Instytut_Medyczny`]},{id:`S26`,name:`Warszawa Centralna`,urls:[`https://pl.wikipedia.org/wiki/Warszawa_Centralna`]},{id:`S27`,name:`Ulica Chmielna`,urls:[`https://pl.wikipedia.org/wiki/Ulica_Chmielna_w_Warszawie`]},{id:`S28`,name:`Aleja Jana Pawła II`,urls:[`https://pl.wikipedia.org/wiki/Aleja_Jana_Paw%C5%82a_II_w_Warszawie`]},{id:`S29`,name:`Ulica gen. Władysława Andersa`,urls:[`https://pl.wikipedia.org/wiki/Ulica_gen._W%C5%82adys%C5%82awa_Andersa_w_Warszawie`]},{id:`S30`,name:`교황 피격`,urls:[`https://en.wikipedia.org/wiki/Attempted_assassination_of_Pope_John_Paul_II`,`https://en.wikipedia.org/wiki/Attempted_assassination_of_Ronald_Reagan`,`https://en.wikipedia.org/wiki/Murder_of_John_Lennon`]},{id:`S31`,name:`dzieje.pl, 1981년 학생 파업`,urls:[`https://dzieje.pl/artykulyhistoryczne/dziewiec-lat-buntu-niezalezne-zrzeszenie-studentow-1980-1989`]},{id:`S32`,name:`Gra na wielu bębenkach (폴란드어 위키백과)`,urls:[`https://pl.wikipedia.org/wiki/Gra_na_wielu_b%C4%99benkach`]},{id:`S33`,name:`OUP, Warsaw Tales`,urls:[`https://global.oup.com/academic/product/warsaw-tales-9780192855565`]},{id:`S34`,name:`Forum Editrice, Che Guevara e altri racconti`,urls:[`https://forumeditrice.it/percorsi/lingua-e-letteratura/oltre/che-guevara-e-altri-racconti`]},{id:`S35`,name:`FantLab, 러시아어판(НЛО, 2006)`,urls:[`https://fantlab.ru/edition339446`]},{id:`S36`,name:`OUP 블로그, 토카르추크 인터뷰`,urls:[`https://blog.oup.com/2024/09/warsaw-tales-an-interview-with-olga-tokarczuk/`]},{id:`S37`,name:`바르샤바대, 명예박사 수여 기사`,urls:[`https://www.uw.edu.pl/olga-tokarczuk-z-tytulem-doktora-honorowego-uw/`]},{id:`S38`,name:`Sztetl, 스타프키 5/7 현판`,urls:[`https://sztetl.org.pl/pl/media/111701`]},{id:`S39`,name:`WP WawaLove, 스타프키 건물 기사`,urls:[`https://wawalove.wp.pl/kim-jest-ta-dziewczynka-trwaja-poszukiwania-sa-pierwsze-tropy-6178497461053057a`]},{id:`S40`,name:`Warszawa Wiki, Ulica Stawki`,urls:[`https://warszawa.fandom.com/wiki/Ulica_Stawki`]},{id:`S41`,name:`Dwutygodnik, Zawodowa historia Amatorskiej`,urls:[`https://www.dwutygodnik.com/artykul/7937-zawodowa-historia-amatorskiej.html`]},{id:`S42`,name:`SZUM, Amatorska (Nowy Świat 21)`,urls:[`https://magazynszum.pl/amatorska-nowy-swiat-21/`]},{id:`S43`,name:`Radio dla Ciebie, 전후 카페`,urls:[`https://rdc.pl/informacje/legendarne-kultowe-warszawskie-kawiarnie-zanikaja-powojenne-perly-posluchaj`]},{id:`S44`,name:`Radio dla Ciebie, 아마토르스카 보수`,urls:[`https://www.rdc.pl/public/aktualnosci/ostatnie-kolejki-przy-kawiarni-amatorska-lokal-czeka-remont-posluchaj_GsrGmSKqoiyYLP4UeuOk`]},{id:`S45`,name:`TwojaPogoda.pl, 계엄 당시 날씨(IPN, IMGW-PIB 인용)`,urls:[`https://www.twojapogoda.pl/wiadomosc/2021-12-13/gdy-40-lat-temu-ogloszono-stan-wojenny-bylo-mrozno-i-snieznie-meteorolodzy-byli-represjonowani/`]},{id:`S46`,name:`Meteoprognoza, 1981-12-13 날씨`,urls:[`https://meteoprognoza.pl/2018/12/13/zimowa-rocznica-czyli-jaka-byla-pogoda-13-grudnia-1981/`]},{id:`S47`,name:`바르샤바 박물관, Słoneczny początek stanu wojennego w Warszawie`,urls:[`https://kolekcje.muzeumwarszawy.pl/en/articles/interpretations/sloneczny-poczatek-stanu-wojennego-w-warszawie`]},{id:`S49`,name:`Puls Warszawy, 바르샤바 계엄 안내`,urls:[`https://pulswarszawa.pl/przewodnik/stan-wojenny-w-warszawie`]},{id:`S50`,name:`Histmag, 1981년 12월 13일 증언 모음`,urls:[`https://histmag.org/13-grudnia-1981-r-dzien-ktory-zmienil-Polske-8824`]},{id:`S51`,name:`러시아어판 온라인 열람본, 대조 전용`,urls:[`https://www.rulit.me/books/igra-na-raznyh-barabanah-rasskazy-read-313936-65.html`]},{id:`S52`,name:`Interia, 계엄 회고(크라쿠프 사례)`,urls:[`https://historia.interia.pl/prl/news-nie-balismy-sie-bo-nie-wiedzielismy-czym-jest-stan-wojenny,nId,8049890`]},{id:`S53`,name:`«Новая Польша» 2005 №7/8, 「Че Гевара」(М. 쿠르간스카야 번역), PDF 68–77쪽`,urls:[`https://novayapolsha-pdfs.fra1.digitaloceanspaces.com/2005/07-08.pdf`]},{id:`S54`,name:`교보문고, 《여러 개의 북을 두드리며》 소개와 목차`,urls:[`https://event.kyobobook.co.kr/funding/detail/487`]}],compare:[[`결말의 시점(¶231)`,`다리를 건너 도시 반대편으로 향하다가 대로에서 장갑차를 봄`,`걸어서 건너편으로 가다가 다리 위에서 대로를 지나는 БТР(병력수송장갑차) 행렬을 봄`,`러시아어판이 맞으면 포니아토프스키 다리 추정이 강해지고, 마지막 시점이 지상이 아니라 다리 위가 된다`],[`차량`,`장갑차`,`БТР`,`바퀴형 장갑차 기록과 맞는다 [S47]. 전차(탱크)로 재현하지 않는다`],[`어두운 공간(¶109)`,`중2층 복도`,`어두운 계단참`,`"중2층"은 층이 아니라 계단참일 수 있다`],[`층수(¶17, ¶69)`,`M은 2층, 화장실 2층`,`둘 다 3층`,`폴란드식 층수 환산 차이일 수 있다. 다만 안나의 층은 두 번역이 같아 환산만으로는 전부 설명되지 않는다`],[`안나의 층(¶117)`,`5층`,`5층`,`일치. 지상층 포함인지는 원문으로만 알 수 있어 실제 높이는 불명이다`],[`건물 유형(¶17, ¶117)`,`빌라`,`아파트, 건물`,`다층 공동주택일 가능성이 높다. 원문 확인 전까지 단독 빌라로 재현하지 않는다`],[`안뜰(¶117)`,`첫 번째 대문, 부서진 사각형`,`첫 번째 아치, 정확하지 않은 사각형`,`아치형 통로와 불규칙한 안뜰로 재현한다`],[`이고르(¶77)`,`이고르`,`유레크(Юрек)`,`영역자 인터뷰도 Igor다 [S36]. 인물 이름은 이고르로 둔다`],[`드레브니차(¶99)`,`드레브니차 마을의 여신`,`숲의 님프, 마을 이름 없음`,`지명이 아닐 가능성이 생겼다. 2장 참조`],[`마을의 규모(¶97–101)`,`작은 마을, 집 앞 골목`,`소도시(городок), 집 앞 인도`,`마을의 크기가 달라진다. 부록 C 18번은 한국어판을 따른다`],[`파업의 형태(¶109, ¶179)`,`교대 파업, 교대식으로 바뀜`,`연속 파업, 무기한 파업으로 넘어감`,`뜻이 반대에 가깝다. 12월 12일 파업 정지 회고와 겹치는 읽기는 한국어판에만 기댄다. 부록 C 10번`],[`원룸의 창(¶187, ¶211)`,`단수, 복수를 정하지 않음`,`창과 커튼봉이 복수`,`부록 C 2번은 창 둘로 짓는다`],[`기념비(¶9)`,`기념비`,`기념비, 이름 없음`,`일치. 게토 영웅 기념비는 여전히 추정이다`],[`카페 이름(¶19, ¶117)`,`아마토르스카`,`«Любительское», 애호가라는 뜻을 옮긴 이름`,`위치가 같아 같은 카페로 본다 [C]. 러시아어판도 카페의 위치를 뒷받침한다`]]},Io=[[`strike`,`농성장`,`¶5–11, ¶67–75`],[`mwindow`,`M의 창`,`¶17`],[`ride`,`111번 버스`,`¶9–13`],[`cafe`,`아마토르스카`,`¶19–35`],[`igor`,`이고르와 역, 부엌`,`¶77–101`],[`anna`,`안나의 5층`,`¶117–177`],[`cyril`,`치릴의 밤`,`¶103–115`],[`room`,`원룸의 밤`,`¶179–229`],[`sunday`,`일요일 아침`,`¶229–231`]],Lo=[[`12월 첫 주`,`영상의 날씨였고 이후 급격히 추워졌다. 작품의 어두운 빛은 서술자의 지각을 따랐다.`,`S45`],[`12월 12일 15시`,`비밀경찰이 봉인된 명령서를 열었다.`,`S47`],[`12월 12일 22시 30분경`,`통신 시설을 장악하고 전화선을 끊었다.`,`S9`],[`12월 12일 23시 20분`,`노보그로즈카와 포즈난스카 모퉁이의 통신 센터에 군인이 들어갔다.`,`S47`],[`12월 13일 0시`,`활동가 체포가 시작됐다.`,`S9`],[`12월 13일 2–3시`,`크라코프스키에프셰드미에시치에, 노비시비아트, 예로졸림스키에, 포니아토프스키 다리를 차로 지난 장군은 완벽한 고요 속에 장갑차 몇 대를 보았다고 회고한다. 111번과 같은 길이다.`,`S50`],[`12월 13일 6시`,`라디오가 계엄을 알리고 야루젤스키의 연설을 내보냈다.`,`S9`],[`12월 13일 아침`,`약 영하 10도, 상고대. 바르샤바 적설은 28cm로 기록되지만 10–20cm로 쓴 자료도 있고 일별 원자료는 보지 못했다. 낮 하늘은 자료가 갈린다. 시민들은 끊긴 전화와 거리의 군용 차량을 보았다.`,`S45, S46, S47, S10`],[`그날 교통`,`당 정보 보고는 운행했다고 적었다. 단일 편향 자료라 신뢰도가 낮다. ¶231의 “전차도 오지 않았다”를 도시 전체의 마비로 넓히지 않는다.`,`S47`]],Ro=[[`작품의 말`,`원문은 스타프키 건물을 게슈타포 본부라고 부른다. ¶69, ¶109`],[`건물 현판`,`건물 현판은 트레블링카 이송을 감독한 SS 부대 지휘부였다고 밝힌다. 게슈타포 본부라는 기록은 찾지 못했다. S38, S4, S5, S7`],[`움슐라크플라츠`,`스타프키 일대의 가장 무거운 역사는 움슐라크플라츠다. 이 단어는 원문에 없다. 건물 현판은 트레블링카 이송을 감독한 SS 부대 지휘부였다고 밝힌다. 스타프키의 움슐라크플라츠 기념비는 1988년에 세워졌으므로 1981년의 풍경에는 없다. 관람 중에 그 침묵을 채우면 작품 바깥의 비극을 작품의 효과로 쓰게 된다. 그래서 여기에서만 사료로 말한다. S38, S4`],[`자멘호프`,`서술자의 집은 옛 게토 구역 위에 있다. 전후 재건은 잔해 위에서 이루어졌다. ¶149–151, S19, S21, S22`],[`기념비`,`¶9의 기념비를 게토 영웅 기념비로 보는 것은 추정이다. 원문은 이름을 말하지 않는다. S20`],[`파업의 형태`,`한국어판은 교대식, 러시아어판은 무기한 파업으로 옮겼다. 폴란드어 원문으로만 판정할 수 있다. ¶179`],[`재건 높이`,`노비시비아트의 해당 구간은 지상층 위 2개 층으로 재건됐다. 작품의 5층은 그대로 두고 뒤쪽의 가상 건물로 지었다. S12`]];function zo(e,t){let n=e.roomEl;n.innerHTML=`<div class="wrap"><h1>열람실</h1><p class="note">경험이 끝난 뒤에 여는 층이다. 장면을 다시 보면 근거 표시가 돌아온다. M의 창은 다시 보기에서 열 수 있다.</p><nav></nav><div class="body"></div></div>`;let r=n.querySelector(`nav`),i=n.querySelector(`.body`),a={time:`그날의 시각표`,layer:`지층`,grade:`근거 등급`,imagine:`상상으로 채운 부분`,compare:`번역 대조`,again:`장면 다시 보기`,src:`출처와 한계`},o=e=>{for(let t of r.children)t.setAttribute(`aria-pressed`,t.dataset.k===e);i.innerHTML=``;let n=e=>{let t=document.createElement(`div`);return t.innerHTML=e,i.appendChild(t),t};if(e===`time`){n(`<h2>원룸의 밤에 도시에서 벌어지던 일</h2><p class="note">서술자가 신문지 위에서 트렌치코트와 무전기를 상상하던 시간대는 실제 작전 시간대와 겹친다. 원문은 이 겹침을 말하지 않는다. 작품 본문은 계엄이라는 단어를 한 번도 쓰지 않는다.</p>`);let e=n(`<div class="scroll"><table><tbody></tbody></table></div>`).querySelector(`tbody`);for(let[t,n,r]of Lo){let i=e.insertRow();i.insertCell().textContent=t,i.insertCell().textContent=n,i.insertCell().textContent=r}n(`<p class="note">¶231의 “전화기가 고장 났는지”는 서술자의 짐작이다. 외부 사실로 보면 차단일 가능성이 높다. 추정이다.</p>`)}if(e===`layer`){n(`<h2>이 땅 아래</h2>`);let e=n(`<div class="scroll"><table><tbody></tbody></table></div>`).querySelector(`tbody`);for(let[t,n]of Ro){let r=e.insertRow();r.insertCell().textContent=t,r.insertCell().textContent=n}}if(e===`grade`&&n(`<h2>등급</h2><table><tbody><tr><td><span class="tag">A</span></td><td>원문 직접 근거. ¶ 번호를 단다.</td></tr><tr><td><span class="tag">B</span></td><td>외부 사료 근거. S 번호를 단다.</td></tr><tr><td><span class="tag">C</span></td><td>합리적 추정.</td></tr><tr><td><span class="tag">D</span></td><td>창작적 해석.</td></tr><tr><td><span class="tag">D-상상</span></td><td>자료 공백을 상상으로 채운 제작용 내용. 화면 오른쪽 아래에 작게 표시한다.</td></tr></tbody></table><p class="note">장면을 다시 보면 근거 표시를 켤 수 있다(G 키). 토요일 전차부터 일요일 아침까지는 체험 중 근거 표시를 끄지만, 상상 문구는 끄지 않는다.</p>`),e===`imagine`){n(`<h2>상상으로 채운 ${Fo.imagined.length}개 항목</h2><p class="note">모두 사실 주장이 아니다. 자료가 들어오면 고치고 표시를 없앤다.</p>`);let e=n(`<div class="scroll"><table><thead><tr><th>번호</th><th>공백</th><th>채운 내용</th><th>표시</th><th>바꾸는 조건</th></tr></thead><tbody></tbody></table></div>`).querySelector(`tbody`);for(let t of Fo.imagined){let n=e.insertRow();for(let e of[t.n,t.gap,`[D-상상] `+t.fill,t.show,t.until])n.insertCell().textContent=e}}if(e===`compare`){n(`<h2>한국어판과 러시아어판</h2><p class="note">폴란드어 본문을 보지 못해 러시아어 번역과 대조했다. 러시아어판도 번역이므로 어느 쪽이 맞는지는 원문으로만 판정할 수 있다. 이 앱은 대사를 한국어판대로 쓰고, ¶99의 드레브니차도 그대로 둔다. 러시아어판에는 마을 이름이 없다.</p>`);let e=n(`<div class="scroll"><table><thead><tr><th>항목</th><th>한국어판</th><th>러시아어판</th><th>영향</th></tr></thead><tbody></tbody></table></div>`).querySelector(`tbody`);for(let t of Fo.compare){let n=e.insertRow();for(let e of t)n.insertCell().textContent=e}}if(e===`again`){n(`<h2>장면 다시 보기</h2><p class="note">근거 표시가 켜진 상태로 다시 들어간다. 왼쪽 위 버튼으로 열람실로 돌아온다.</p>`);let e=n(`<div class="grid"></div>`).firstChild;for(let[n,r,i]of Io){let a=document.createElement(`button`);a.innerHTML=`${r}<small>${i}</small>`,a.onclick=()=>t(n),e.appendChild(a)}}if(e===`src`){n(`<h2>한계</h2><p class="note">도시의 도로와 건물 윤곽은 OpenStreetMap 기여자들의 현재 지도(ODbL)에서 왔다. 1981년 이후의 초고층과 시공 연도가 확인된 건물은 걸렀지만 전부 걸러지지는 않는다. 분석은 한국어 번역에 의존하며 폴란드어 본문을 보지 못했다. 원문은 짧게만 인용한다. 위키백과와 동호인 자료는 탐색용 2차 출처다. S6, S11은 원문 페이지가 404여서 검색 발췌로만 보았고, S5, S7, S13, S15, S17, S21, S22, S39도 검색 발췌 기준이다. S8, S18은 결번이다.</p><h2>출처</h2>`);let e=n(`<ul style="padding-left:18px"></ul>`).firstChild;for(let t of Fo.sources){let n=document.createElement(`li`);n.append(`[${t.id}] ${t.name}: `);for(let e of t.urls){let t=document.createElement(`a`);t.href=e,t.target=`_blank`,t.rel=`noopener`,t.textContent=e,n.appendChild(t),n.append(` `)}e.appendChild(n)}}};for(let[e,t]of Object.entries(a)){let n=document.createElement(`button`);n.dataset.k=e,n.textContent=t,n.onclick=()=>o(e),r.appendChild(n)}n.classList.add(`show`),o(`time`)}var Bo=new URLSearchParams(location.search),Vo=document.getElementById(`ui`),Q=new qi(Vo),Ho=new Ji,Uo=new da(document.getElementById(`gl`),Q,Ho),$=new pa(Uo,Q,Ho,Bo);window.__che={c:$,engine:Uo,hud:Q,audio:Ho},Q.onSound=()=>{let e=Ho.toggle();Q.btnSound.textContent=e?`소리 끔`:`소리`};var Wo=[[`dark`,`어둠`],[`strike`,`농성장`],[`mwindow`,`M의 창`],[`stop`,`기념비 정류장`],[`ride`,`111번 버스`],[`cafe`,`체 게바라`],[`igor`,`이고르`],[`anna`,`안나 아주머니`],[`cyril`,`치릴의 밤`],[`tram`,`토요일 전차`],[`roomn`,`원룸의 밤`],[`sunday`,`일요일 아침`],[`reading`,`열람실`]],Go=`dark`,Ko=e=>{Go=e},qo=()=>Math.max(0,Wo.findIndex(e=>e[0]===Go));Uo.onLine=e=>$.line(e),Bo.has(`revisit`)||Bo.has(`only`)||Bo.has(`auto`)||(Uo.onChapter=e=>{if(Q.titleEl.style.display!==`none`)return;let t=qo()+e;t<0||t>=Wo.length||(location.search=`?ch=`+Wo[t][0])});for(let e of[`keydown`,`pointerdown`])addEventListener(e,()=>{Ho.ctx?.state===`suspended`&&Ho.ctx.resume()});window.__errs=[];var Jo=e=>{window.__errs.push(String(e).slice(0,400)),console.error(e),Q.status(`오류: 새로고침해 주세요`)};addEventListener(`error`,e=>Jo(e.message)),addEventListener(`unhandledrejection`,e=>Jo(e.reason?.stack||e.reason));async function Yo(){await po($,mo($,so((await Ta($)).data)),{intro:[[`눈동자가 되어, 검고 투명한 동공이 되어 도시를 관망하며.`,{ref:`¶9`,quote:!0}]]})}async function Xo(e){let t=(await Ta($)).data,n=so(t),r=e===`igor`?n.near(...t.anchors.bridgeW)-30:e===`room`?n.near(...t.anchors.bridgeW)-60:n.near(...t.anchors.univ)+120;await po($,[{from:r,to:r+(e===`igor`?340:e===`room`?420:380),speed:13}],{kind:e===`room`?`tram`:`bus`,mapOff:e===`room`,intro:e===`room`?[[`토요일 오후, 체 게바라를 만나기 위해 전차를 탔다.`,{ref:`¶179`}],[`잠깐 들러 괜찮은지 확인만 할 작정이었다. 파업은 교대식으로 바뀌었고, 다음 날 대학에서 큰 집회가 있었다.`,{ref:`¶179`}]]:[]})}var Zo=async()=>{if(!$.busy&&Q.chooserEl.classList.contains(`show`)){$.busy=!0,Q.mapOff(),Q.chooserEl.classList.remove(`show`),await Q.fade(!0,.4),Ho.stopAll(.3),$.dispose();try{await ao($,{onlyLook:!0})}finally{$.busy=!1;let e=$.reopen;e?e():Q.fade(!1,.3)}}};async function Qo(){let e=$.state.v||($.state.v={}),t=[[`cafe`,`체 게바라`,`아마토르스카, 노비시비아트`],[`igor`,`이고르`,`사스카켕파, 그리고 역`],[`anna`,`안나 아주머니`,`블리클레 뒤 첫 번째 대문`]];for(;Object.keys(e).length<3;)t.filter(t=>!e[t[0]]),await eo($,Object.keys(e).length),Q.mapOn(Zo),await new Promise(n=>{$.reopen=()=>{n(null)},(async()=>{let r=await $.choose(`외출증`,`세 사람을 돌본다. ¶15  어느 순서든 된다. 사건들의 순서가 늘 일정할 필요는 없다. ¶71`,t.map(([t,n,r])=>({id:t,label:n,sub:r,disabled:!!e[t]})));$.reopen=null,Q.mapOff(),n(r)})()}).then(async t=>{t&&(Ko(t),await $.leave(.6),await Xo(t),t===`cafe`&&await ho($),t===`igor`&&await vo($),t===`anna`&&await So($),e[t]=1,$.save(),Q.fade(!0,.01))});await eo($,3),await $.leave(.8),Q.mapOff(),Ko(`anna`)}async function $o(){Ko(`cyril`),await Ao($),await es()}async function es(e=`tram`){Q.fade(!0,.01),Q.mapOff(),Q.allowGrades(!1),e===`tram`&&(Ko(`tram`),await Xo(`room`)),e!==`sunday`&&(Ko(`roomn`),await jo($)),Ko(`sunday`),await Po($)}async function ts(e){Ko(e);let t=qo();if(Q.status(`${t+1} / ${Wo.length}  ${Wo[t][1]}`),setTimeout(()=>Q.status(``),2600),[`dark`,`strike`,`mwindow`,`stop`,`ride`].includes(e))return rs(e);if(e===`reading`)return $.state.done=1,$.save(),ns();if([`cafe`,`igor`,`anna`].includes(e))return Q.showTools(!0),$.state.v=$.state.v||{},await{cafe:ho,igor:vo,anna:So}[e]($),$.state.v[e]=1,$.save(),Q.fade(!0,.01),rs(`visits`);if(Q.showTools(!0),e===`cyril`)return rs(`night`);await es(e===`roomn`?`room`:e),$.state.done=1,$.save(),ns()}function ns(){Ko(`reading`),Q.noPanel=!1,Q.showTools(!1),Q.imagine(!1),Q.clearLine(),Q.hint(``),Q.fade(!1,.3),zo(Q,e=>{location.search=`?stage=`+e+`&revisit=1`})}async function rs(e){Q.showTools(e!==`dark`);let t=[`dark`,`strike`,`mwindow`,`stop`,`ride`,`visits`,`night`,`room`],n=t.indexOf(e),r=Bo.has(`revisit`)||Bo.has(`only`),i=e=>{let i=t.indexOf(e),a=n>=0&&i>=n&&(!r||i===n);return a&&!r&&($.state.at=e,$.save(),Wo.some(t=>t[0]===e)&&Ko(e)),a};i(`dark`)&&await Ia($),i(`strike`)&&await Qa($),i(`mwindow`)&&await ao($),i(`stop`)&&await fo($),i(`ride`)&&await Yo(),i(`visits`)&&($.state.v=$.state.v||{},await Qo()),i(`night`)&&await $o(),!r||e===`room`?($.state.done=1,$.save(),ns()):Bo.has(`revisit`)?location.search=`?stage=room`:Bo.has(`map`)&&(location.search=``)}var is={station:bo,kitchen:xo,cafe:ho,igor:vo,anna:So,cyril:Ao,sunday:Po,roomn:jo},as=()=>{location.search=Bo.has(`map`)?``:`?stage=room`};async function os(){let e=Bo.get(`ch`);if(e&&Wo.some(t=>t[0]===e))return Q.titleEl.style.display=`none`,Ho.start(),ts(e);let t=Bo.get(`stage`);if(t){if(Q.titleEl.style.display=`none`,Ho.start(),Q.showTools(!0),Bo.has(`revisit`)){Q.toggleGrades(!0),Q.forceGrades=!0;let e=document.createElement(`button`);e.textContent=`열람실로`,e.style.cssText=`position:absolute;left:12px;top:12px;pointer-events:auto;background:#0009;border:1px solid #5556;padding:6px 10px;min-height:32px;font:12px sans-serif;color:#e7e2d6;z-index:6`,e.onclick=()=>location.search=`?stage=room`,Vo.appendChild(e)}else if(Bo.has(`map`)){let e=document.createElement(`button`);e.textContent=`지도로`,e.style.cssText=`position:absolute;left:12px;top:12px;pointer-events:auto;background:#0009;border:1px solid #5556;padding:6px 10px;min-height:32px;font:12px sans-serif;color:#e7e2d6;z-index:6`,e.onclick=()=>location.search=``,Vo.appendChild(e)}if(t===`room`&&!Bo.has(`revisit`))return ns();if(t===`room`&&Bo.has(`revisit`)){await Xo(`room`),await jo($),location.search=`?stage=room`;return}if(is[t]){await is[t]($),as();return}if(t===`ride`){await Yo(),as();return}return rs(t)}let n=Q.titleEl;n.style.display=`flex`;let r=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);n.innerHTML=`<div class="menu"><h1>내려다보던 도시에서 내려오기</h1><p>올가 토카르추크 단편 「체게바라」의 바르샤바. 1981년 겨울.</p><p class="lead">지도에서 장소를 누르면 원문과 그곳의 장면이 열립니다.</p><ul class="places">${no.map(e=>`<li><button class="pl" data-id="${e.id}"><b>${r(e.name)}</b><small>${r(e.scenes.map(e=>e[1]).join(` · `))}${e.offmap?` · 지도 밖`:``}</small></button></li>`).join(``)}</ul><div class="story"><button id="story" aria-expanded="false"><span>이야기로 플레이</span><span class="chip">30 min</span></button><div class="storybox"><p class="sub">어둠 속 농성장에서 일요일 아침의 대로까지, 원작 순서대로 걷습니다.</p><div class="row"><button id="go">처음부터</button>${$.state.at&&!$.state.done?`<button id="ct">이어서</button>`:``}<button id="chs">챕터</button>${$.state.done?`<button id="rd">열람실</button>`:``}</div><div class="chapters"></div><p class="warn">정신질환, 구속, 공포와 망상의 장면이 있습니다. 치릴의 소리는 크게 들릴 수 있습니다.</p><dl class="keys"><dt><kbd>←</kbd><kbd>→</kbd></dt><dd>이전·다음 대사</dd><dt><kbd>Shift</kbd>+<kbd>←</kbd><kbd>→</kbd></dt><dd>이전·다음 챕터</dd><dt><kbd>Z</kbd><kbd>C</kbd></dt><dd>몸 돌리기</dd></dl></div></div><dl class="keys maphelp"><dt>끌기 · <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></dt><dd>지도 이동</dd><dt>오른쪽 끌기 · <kbd>Z</kbd><kbd>C</kbd></dt><dd>돌리기</dd><dt>휠 · <kbd>+</kbd><kbd>−</kbd></dt><dd>확대</dd></dl><p class="osm">지도 데이터 © OpenStreetMap 기여자 (ODbL)</p></div><aside class="card" hidden aria-labelledby="card-h"></aside><button class="home">전체 보기</button>`;let i=n.querySelector(`.menu`),a=n.querySelector(`.card`),o=null,s={A:`원문 근거`,B:`외부 사료`,C:`추정`,"D-상상":`상상으로 채움`},c=e=>{for(let t of n.querySelectorAll(`.places .pl`))t.dataset.id===e?t.setAttribute(`aria-current`,`true`):t.removeAttribute(`aria-current`)},l=null,u=()=>{let e=a.contains(document.activeElement);a.hidden=!0,n.classList.remove(`carded`),c(null),o?.clear(),e&&l&&l.offsetParent&&l.focus(),l=null},d=async e=>{Ho.start(),await Q.fade(!0,.5),location.search=`?stage=`+e+`&only=1&map=1`},f=e=>{let t=no.find(t=>t.id===e);if(!t)return;c(e),a.innerHTML=`<button class="x" aria-label="닫기">닫기</button><p class="gr"><span class="tag"></span><span class="gl"></span></p><h2 id="card-h" tabindex="-1"></h2><p class="plname"></p><p class="desc"></p><div class="qs"></div><p class="note"></p><div class="row"></div>`,a.querySelector(`.tag`).textContent=t.g,a.querySelector(`.gl`).textContent=s[t.g]||``,a.querySelector(`h2`).textContent=t.name,a.querySelector(`.plname`).textContent=t.pl+(t.offmap?` · 지도 밖`:``),a.querySelector(`.desc`).textContent=t.desc;let r=a.querySelector(`.qs`);for(let[e,n]of t.q){let t=document.createElement(`blockquote`);t.innerHTML=`<span></span><small></small>`,t.firstChild.textContent=e,t.lastChild.textContent=n,r.appendChild(t)}let i=a.querySelector(`.note`);t.note?i.textContent=t.note:i.remove();let o=a.querySelector(`.row`);for(let[e,n]of t.scenes){let t=document.createElement(`button`);t.className=`enter`,t.textContent=`장면 보기 · ${n}`,t.onclick=()=>d(e),o.appendChild(t)}a.querySelector(`.x`).onclick=u,a.hidden=!1,n.classList.add(`carded`),l&&a.querySelector(`h2`).focus()};for(let e of n.querySelectorAll(`.places .pl`))e.onclick=()=>{l=e;let t=e.dataset.id;no.find(e=>e.id===t).offmap?o?.clear():o?.select(t),f(t)};addEventListener(`keydown`,e=>{e.code===`Escape`&&!a.hidden&&n.style.display!==`none`&&u()});let p=()=>innerWidth<=640,m=()=>innerWidth<=920,h=()=>{let e=i.getBoundingClientRect();return p()?{l:14,t:30,r:innerWidth-14,b:e.top-10}:{l:e.right+30,t:40,r:innerWidth-30,b:innerHeight-40}},g=()=>{let e=i.getBoundingClientRect();return m()?{x:innerWidth/2,y:innerHeight*.18}:{x:(e.right+innerWidth-396)/2,y:innerHeight/2}};n.querySelector(`.home`).onclick=()=>{u(),o?.home()};try{o=await oo($,{onSelect:f,area:h,focus:g})}catch(e){console.error(e),Q.fade(!1,.3)}let _=async e=>{Ho.start(),i.classList.remove(`in`),a.hidden=!0,o&&await o.leave(),n.style.display=`none`,e()};n.querySelector(`#go`).onclick=()=>_(()=>{$.state=$.state.done?{done:1}:{},$.save(),rs(`dark`)});let v=n.querySelector(`#ct`);v&&(v.onclick=()=>_(()=>rs($.state.at)));let y=n.querySelector(`#rd`);y&&(y.onclick=()=>_(()=>ns()));let b=n.querySelector(`.storybox`),x=n.querySelector(`#story`);x.onclick=()=>{let e=!b.classList.contains(`open`);b.classList.toggle(`open`,e),i.classList.toggle(`storyon`,e),x.setAttribute(`aria-expanded`,e),e&&(n.querySelector(`#ct`)||n.querySelector(`#go`)).focus()};let S=n.querySelector(`.chapters`);for(let[e,t]of Wo){let n=document.createElement(`button`);n.textContent=t,n.onclick=()=>{location.search=`?ch=`+e},S.appendChild(n)}n.querySelector(`#chs`).onclick=()=>S.classList.toggle(`open`),await new Promise(e=>setTimeout(e,$.auto?10:1200)),i.classList.add(`in`)}os();