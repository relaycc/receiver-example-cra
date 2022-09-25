import React, { useMemo, useCallback, useEffect, useState, useRef } from 'react';
import create from 'zustand';
import { Client } from '@relaycc/xmtp-js';
import { messageApi } from '@xmtp/proto';
import { getAddress as getAddress$1 } from 'ethers/lib/utils';
import { AlchemyProvider } from '@ethersproject/providers';
import { gql, request } from 'graphql-request';
import Blockies from 'react-blockies';
import { motion, AnimatePresence as AnimatePresence$2 } from 'framer-motion';

var useResponsiveName = function (ensName, address, fallback) {
    var userDisplayId = useMemo(function () {
        return ensName || address;
    }, [ensName, address]);
    var responsiveDisplayId = useMemo(function () {
        if (!userDisplayId) {
            return fallback;
        }
        if (ensName) {
            return truncateName(ensName);
        }
        if (address) {
            return truncateAddress$1(address);
        }
        else
            return fallback;
    }, [userDisplayId]);
    return responsiveDisplayId;
};
function truncateName(e) {
    if (e === undefined) {
        return 'ENS name or address not found';
    }
    if (e.length > 25) {
        return e.slice(0, 17) + '...' + e.substring(e.length - 4);
    }
    else
        return e;
}
function truncateAddress$1(e) {
    if (e === undefined) {
        return 'Name or address not found';
    }
    return e.slice(0, 5) + '...' + e.substring(e.length - 5);
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var useReceiver = create(function (set, get) { return ({
    wallet: null,
    setWallet: function (wallet) { return set({ wallet: wallet }); },
    pinnedConversations: [],
    setPinnedConversations: function (pinnedConversations) { return set({ pinnedConversations: pinnedConversations }); },
    isOpen: false,
    setIsOpen: function (isOpen) { return set({ isOpen: isOpen }); },
    screenHistory: [{ id: 'conversations' }],
    setScreenHistory: function (screenHistory) { return set({ screenHistory: screenHistory }); },
    dispatch: function (action) {
        switch (action.id) {
            case 'add pinned conversation':
                handleAddPinnedConversation(get(), action.peerAddress);
                break;
            case 'remove pinned conversation':
                handleRemovePinnedConversation(get(), action.peerAddress);
                break;
            case 'go to screen':
                handleGoToScreen(get(), action.screen);
                break;
            case 'go back screen':
                handleGoBackScreen(get());
                break;
            default:
                throw new Error('Never should have got here!');
        }
    },
}); });
var useSetWallet = function () {
    var setWallet = useReceiver(function (state) { return state.setWallet; });
    return useCallback(function (wallet) {
        setWallet(wallet);
    }, []);
};
var useIsOpen = function () {
    return useReceiver(function (state) { return state.isOpen; });
};
var handleGoBackScreen = function (state) {
    if (state.screenHistory.length === 1) {
        return;
    }
    else {
        state.setScreenHistory(state.screenHistory.slice(0, state.screenHistory.length - 1));
    }
};
var handleGoToScreen = function (state, screen) {
    if (sameScreen(currentScreen(state), screen)) {
        return;
    }
    else {
        state.setScreenHistory(__spreadArray(__spreadArray([], state.screenHistory, true), [screen], false));
    }
};
var handleRemovePinnedConversation = function (state, peerAddress) {
    state.setPinnedConversations(state.pinnedConversations.filter(function (p) { return p !== peerAddress; }));
};
var handleAddPinnedConversation = function (state, peerAddress) {
    for (var _i = 0, _a = state.pinnedConversations; _i < _a.length; _i++) {
        var pinnedConversation = _a[_i];
        if (pinnedConversation === peerAddress)
            return;
    }
    state.setPinnedConversations(__spreadArray(__spreadArray([], state.pinnedConversations, true), [peerAddress], false));
};
var sameScreen = function (screenA, screenB) {
    if (screenA.id === 'messages' && screenB.id === 'messages') {
        return screenA.peerAddress === screenB.peerAddress;
    }
    else {
        return screenA.id === screenB.id;
    }
};
var currentScreen = function (_a) {
    var screenHistory = _a.screenHistory;
    return screenHistory[screenHistory.length - 1];
};

var useRelay = create(function (set, get) { return ({
    client: null,
    stream: null,
    channels: {},
    statuses: {},
    setClient: function (client) { return set({ client: client }); },
    signatureStatus: 'idle',
    setSignatureStatus: function (signatureStatus) { return set({ signatureStatus: signatureStatus }); },
    setChannels: function (channels) { return set({ channels: channels }); },
    setStatuses: function (statuses) { return set({ statuses: statuses }); },
    setStream: function (stream) { return set({ stream: stream }); },
    dispatch: function (action) {
        switch (action.id) {
            case 'sign in':
                handleSignIn(get(), action.wallet);
                break;
            case 'load peer address':
                handleLoadPeerAddress(get(), action.peerAddress);
                break;
            case 'load conversation list':
                handleLoadConversationList(get(), action.options);
                break;
            case 'stream messages':
                handleStreamMessages(get());
                break;
            case 'new message':
                handleNewMessage(get(), action.message);
                break;
            default:
                throw new Error('Never should have got here!');
        }
    },
}); });
var handleStreamMessages = function (state) { return __awaiter(void 0, void 0, void 0, function () {
    var stream;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(state.client === null || state.stream !== null)) return [3 /*break*/, 1];
                return [2 /*return*/];
            case 1: return [4 /*yield*/, state.client.conversations.streamAllMessages()];
            case 2:
                stream = (_a.sent());
                state.setStream(stream);
                listenToStream(state, stream);
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
var listenToStream = function (state, stream) { var stream_1, stream_1_1; return __awaiter(void 0, void 0, void 0, function () {
    var message, e_1_1;
    var e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, 6, 11]);
                stream_1 = __asyncValues(stream);
                _b.label = 1;
            case 1: return [4 /*yield*/, stream_1.next()];
            case 2:
                if (!(stream_1_1 = _b.sent(), !stream_1_1.done)) return [3 /*break*/, 4];
                message = stream_1_1.value;
                state.dispatch({ id: 'new message', message: message });
                _b.label = 3;
            case 3: return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 11];
            case 5:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 11];
            case 6:
                _b.trys.push([6, , 9, 10]);
                if (!(stream_1_1 && !stream_1_1.done && (_a = stream_1.return))) return [3 /*break*/, 8];
                return [4 /*yield*/, _a.call(stream_1)];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 10: return [7 /*endfinally*/];
            case 11: return [2 /*return*/];
        }
    });
}); };
var handleNewMessage = function (state, message) { return __awaiter(void 0, void 0, void 0, function () {
    var peerAddress;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        if (state.client === null) {
            return [2 /*return*/];
        }
        else {
            peerAddress = pickPeerAddress(state.client.address, message);
            state.setChannels(__assign(__assign({}, state.channels), (_a = {}, _a[peerAddress] = __assign(__assign({}, (state.channels[peerAddress] || {})), (_b = {}, _b[message.id] = message, _b)), _a.conversationList = __assign(__assign({}, (state.channels.conversationList || {})), (_c = {}, _c[peerAddress] = message, _c)), _a)));
        }
        return [2 /*return*/];
    });
}); };
var handleSignIn = function (state, wallet) { return __awaiter(void 0, void 0, void 0, function () {
    var client;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                state.setSignatureStatus('waiting');
                return [4 /*yield*/, Client.create(wallet, { env: 'production' })];
            case 1:
                client = _b.sent();
                state.setClient(client);
                state.setSignatureStatus('idle');
                return [3 /*break*/, 3];
            case 2:
                _b.sent();
                state.setSignatureStatus('denied');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var handleLoadPeerAddress = function (state, peerAddress, limit) {
    if (limit === void 0) { limit = 20; }
    return __awaiter(void 0, void 0, void 0, function () {
        var userOnNetwork, messages;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!(state.client === null)) return [3 /*break*/, 1];
                    return [2 /*return*/];
                case 1:
                    if (!(state.statuses[peerAddress] !== undefined)) return [3 /*break*/, 2];
                    return [2 /*return*/];
                case 2: return [4 /*yield*/, state.client.canMessage(peerAddress)];
                case 3:
                    userOnNetwork = _e.sent();
                    if (!!userOnNetwork) return [3 /*break*/, 4];
                    state.setStatuses(__assign(__assign({}, state.statuses), (_a = {}, _a[peerAddress] = 'no peer', _a)));
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, fetchMessages(state.client, peerAddress, limit)];
                case 5:
                    messages = _e.sent();
                    state.setStatuses(__assign(__assign({}, state.statuses), (_b = {}, _b[peerAddress] = 'loadingFull', _b)));
                    state.setChannels(__assign(__assign({}, state.channels), (_c = {}, _c[peerAddress] = messages.reduce(function (result, message) {
                        var _a;
                        return __assign(__assign({}, result), (_a = {}, _a[message.id] = message, _a));
                    }, {}), _c)));
                    state.setStatuses(__assign(__assign({}, state.statuses), (_d = {}, _d[peerAddress] = 'loadedFull', _d)));
                    _e.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
};
var handleLoadConversationList = function (state, options) { return __awaiter(void 0, void 0, void 0, function () {
    var client, messages;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = state.client;
                if (!(client === null)) return [3 /*break*/, 1];
                return [2 /*return*/];
            case 1:
                if (!
                // If we've already loaded the conversation list, don't do it again.
                (state.statuses.conversationList !== undefined &&
                    Boolean(options === null || options === void 0 ? void 0 : options.forceReload) === false)) 
                // If we've already loaded the conversation list, don't do it again.
                return [3 /*break*/, 2];
                return [2 /*return*/];
            case 2:
                state.setStatuses(__assign(__assign({}, state.statuses), { conversationsList: 'loadingFull' }));
                return [4 /*yield*/, fetchConversationList(client, options === null || options === void 0 ? void 0 : options.limitPeerAddresses)];
            case 3:
                messages = _a.sent();
                state.setChannels(__assign(__assign({}, state.channels), { conversationList: messages.reduce(function (result, message) {
                        var _a;
                        return __assign(__assign({}, result), (_a = {}, _a[pickPeerAddress(client.address, message)] = message, _a));
                    }, {}) }));
                state.setStatuses(__assign(__assign({}, state.statuses), { conversationList: 'loadedFull' }));
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
var fetchConversationList = function (client, limitPeerAddresses) { return __awaiter(void 0, void 0, void 0, function () {
    var peerAddresses, lists;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(limitPeerAddresses === undefined)) return [3 /*break*/, 2];
                return [4 /*yield*/, client.conversations
                        .list()
                        .then(function (conversations) {
                        return conversations.map(function (conversation) { return conversation.peerAddress; });
                    })];
            case 1:
                peerAddresses = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                peerAddresses = limitPeerAddresses;
                _a.label = 3;
            case 3: return [4 /*yield*/, Promise.all(peerAddresses.map(function (peerAddress) {
                    return fetchMessages(client, peerAddress, 1);
                }))];
            case 4:
                lists = _a.sent();
                return [2 /*return*/, lists.map(function (list) { return list[0]; })];
        }
    });
}); };
var fetchMessages = function (client, peerAddress, limit, direction) {
    if (limit === void 0) { limit = 1; }
    if (direction === void 0) { direction = messageApi.SortDirection.SORT_DIRECTION_DESCENDING; }
    return __awaiter(void 0, void 0, void 0, function () {
        var notValidatedMessages, messages, _i, notValidatedMessages_1, notValidated;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.listConversationMessages(peerAddress, { limit: limit, direction: direction })];
                case 1:
                    notValidatedMessages = _a.sent();
                    messages = [];
                    for (_i = 0, notValidatedMessages_1 = notValidatedMessages; _i < notValidatedMessages_1.length; _i++) {
                        notValidated = notValidatedMessages_1[_i];
                        if (validateMessage(notValidated)) {
                            messages.push(notValidated);
                        }
                    }
                    return [2 /*return*/, messages];
            }
        });
    });
};
var validateMessage = function (xmtpMessage) {
    var test = xmtpMessage;
    return (test.sent !== undefined &&
        test.recipientAddress !== undefined &&
        test.senderAddress !== undefined);
};
var byMostRecentMessage = function (channel) {
    return Object.values(channel).sort(function (a, b) {
        return a.sent.getTime() <= b.sent.getTime() ? -1 : 1;
    });
};
var pickPeerAddress = function (clientAddress, message) {
    if (clientAddress === message.recipientAddress) {
        return message.senderAddress;
    }
    else {
        return message.recipientAddress;
    }
};
var isEmpty = function (channel) {
    return Object.values(channel).length === 0;
};

var useLaunch = function (wallet) {
    var dispatch = useReceiver(function (state) { return state.dispatch; });
    var setIsOpen = useReceiver(function (state) { return state.setIsOpen; });
    var setWallet = useReceiver(function (state) { return state.setWallet; });
    useEffect(function () {
        if (wallet !== undefined) {
            setWallet(wallet || null);
        }
    }, [wallet, setWallet]);
    return useCallback(function (handle) {
        if (typeof handle !== 'string') {
            dispatch({ id: 'go to screen', screen: { id: 'conversations' } });
        }
        else {
            dispatch({
                id: 'go to screen',
                screen: { id: 'messages', peerAddress: handle },
            });
        }
        setIsOpen(true);
    }, []);
};

var provider = new AlchemyProvider('homestead', 'kmMb00nhQ0SWModX6lJLjXy_pVtiQnjx');
var useProvider = function () {
    return provider;
};

function truncateAddress(e) {
    if (e === undefined) {
        return 'Name or address not found';
    }
    return e.slice(0, 5) + '...' + e.substring(e.length - 5);
}

// All date related functions can be exported from here
var shortDate = function (d) {
    if (!d)
        return 'N/A';
    var shortDateText = checkDateIsTodayOrYesterday(d);
    return shortDateText;
};
var time = function (d) {
    if (!d)
        return 'N/A';
    var hour = d.getHours() % 12 || 12;
    var minute = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    return "".concat(hour, ":").concat(minute);
};
var checkDateIsTodayOrYesterday = function (someDate) {
    var dateWithoutTime = function (d) { return new Date(d.toDateString()); };
    var today = dateWithoutTime(new Date());
    var yesterday = dateWithoutTime(new Date());
    yesterday.setDate(today.getDate() - 1);
    var comparisonDateTime = dateWithoutTime(someDate).getTime();
    if (comparisonDateTime > today.getTime() ||
        comparisonDateTime < yesterday.getTime()) {
        return someDate.toLocaleDateString('en-us', {
            month: 'short',
            day: 'numeric',
        });
    }
    else if (comparisonDateTime === today.getTime()) {
        return "Today";
    }
    else {
        return "Yesterday";
    }
};

var nameCache = {};
var addressCache = {};
var avatarCache = {};
var setName = function (address, name) {
    nameCache[address] = name;
    document.dispatchEvent(new CustomEvent(address + 'ens cache update'));
    if (typeof name.name === 'string') {
        addressCache[name.name] = { status: 'settled', address: address };
        document.dispatchEvent(new CustomEvent(address + 'ens address cache update'));
    }
};
var getName = function (address) {
    if (typeof address === 'string') {
        return nameCache[address];
    }
    else {
        return undefined;
    }
};
var setAddress = function (name, address) {
    addressCache[name] = address;
    document.dispatchEvent(new CustomEvent(name + 'ens address cache update'));
    if (typeof address.address === 'string') {
        nameCache[address.address] = { status: 'settled', name: name };
        document.dispatchEvent(new CustomEvent(name + 'ens address cache update'));
    }
};
var getAddress = function (name) {
    return addressCache[name];
};
var setEnsAvatar = function (name, avatar) {
    avatarCache[name] = avatar;
    document.dispatchEvent(new CustomEvent(name + 'ens avatar cache update'));
    var cachedAddress = addressCache[name];
    if (cachedAddress && typeof cachedAddress.address === 'string') {
        avatarCache[cachedAddress.address] = avatar;
        document.dispatchEvent(new CustomEvent(cachedAddress.address + 'ens avatar cache update'));
    }
};
var getEnsAvatar = function (name) {
    return avatarCache[name];
};

var useEnsAddress = function (_a) {
    var handle = _a.handle;
    var _b = useState((handle && getAddress(handle)) || {
        address: undefined,
        status: 'noop',
    }), state = _b[0], setState = _b[1];
    useEffect(function () {
        if (typeof handle === 'string') {
            var listener_1 = function () {
                if (typeof handle === 'string') {
                    var cached = getAddress(handle);
                    if (cached) {
                        setState(cached);
                    }
                }
            };
            document.addEventListener(handle + 'ens address cache update', listener_1);
            return function () {
                document.removeEventListener(handle + 'ens address cache update', listener_1);
            };
        }
    }, [handle]);
    useEffect(function () {
        var provider = useProvider();
        var fetchAddress = function (handle) { return __awaiter(void 0, void 0, void 0, function () {
            var address, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setAddress(handle, { status: 'fetching', address: undefined });
                        setState({ status: 'fetching', address: undefined });
                        return [4 /*yield*/, provider.resolveName(handle)];
                    case 1:
                        address = _a.sent();
                        result = address === null
                            ? { status: 'settled', address: undefined }
                            : { status: 'settled', address: getAddress$1(address) };
                        setAddress(handle, result);
                        setState(result);
                        return [2 /*return*/];
                }
            });
        }); };
        if (typeof handle === 'string') {
            var cached = getAddress(handle);
            if (cached) {
                setState(__assign({}, cached));
            }
            else {
                fetchAddress(handle);
            }
        }
    }, [handle]);
    return state;
};

var useEnsName = function (_a) {
    var handle = _a.handle;
    var provider = useProvider();
    var _b = useState({
        name: undefined,
        status: 'noop',
    }), state = _b[0], setState = _b[1];
    useEffect(function () {
        if (typeof handle === 'string') {
            var listener_1 = function () {
                if (typeof handle === 'string') {
                    var cached = getName(handle);
                    if (cached) {
                        setState(cached);
                    }
                }
            };
            document.addEventListener(handle + 'ens cache update', listener_1);
            return function () {
                document.removeEventListener(handle + 'ens cache update', listener_1);
            };
        }
    }, [handle]);
    useEffect(function () {
        var fetchName = function (handle) { return __awaiter(void 0, void 0, void 0, function () {
            var name, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setName(handle, { status: 'fetching', name: undefined });
                        setState({ status: 'fetching', name: undefined });
                        return [4 /*yield*/, provider.lookupAddress(handle)];
                    case 1:
                        name = _a.sent();
                        result = name === null
                            ? { status: 'settled', name: undefined }
                            : { status: 'settled', name: name };
                        setName(handle, result);
                        setState(result);
                        return [2 /*return*/];
                }
            });
        }); };
        if (typeof handle === 'string') {
            var cached = getName(handle);
            if (cached) {
                setState(cached);
            }
            else {
                fetchName(handle);
            }
        }
    }, [handle]);
    return state;
};

var isEthAddress = function (handle) {
    return (typeof handle === 'string' &&
        handle.startsWith('0x') &&
        handle.length === 42);
};
var isEnsName = function (handle) {
    return typeof handle === 'string' && handle.endsWith('.eth');
};
var isLensName = function (handle) {
    return typeof handle === 'string' && handle.endsWith('.lens');
};

var useLensAddress = function (_a) {
    var handle = _a.handle;
    var _b = useState({
        address: undefined,
        status: 'noop',
    }), state = _b[0], setState = _b[1];
    useEffect(function () {
        var fetchAddress = function (handle) { return __awaiter(void 0, void 0, void 0, function () {
            var profile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setState({ status: 'fetching', address: undefined });
                        return [4 /*yield*/, request('https://api.lens.dev', profileByHandleQuery, {
                                request: { handle: handle },
                            })];
                    case 1:
                        profile = (_a.sent()).profile;
                        if (profile === null) {
                            setState({ status: 'settled', address: undefined });
                        }
                        else {
                            setState({
                                status: 'settled',
                                address: getAddress$1(profile.ownedBy),
                            });
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        if (!isLensName(handle)) {
            setState({ address: undefined, status: 'noop' });
        }
        else {
            fetchAddress(handle);
        }
    }, [handle]);
    return state;
};
var profileByHandleQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query Profile($request: SingleProfileQueryRequest!) {\n    profile(request: $request) {\n      handle\n      ownedBy\n    }\n  }\n"], ["\n  query Profile($request: SingleProfileQueryRequest!) {\n    profile(request: $request) {\n      handle\n      ownedBy\n    }\n  }\n"])));
var templateObject_1;

var useEnsAvatar = function (_a) {
    var handle = _a.handle;
    var provider = useProvider();
    var _b = useState((handle && getEnsAvatar(handle)) || {
        avatar: undefined,
        status: 'noop',
    }), state = _b[0], setState = _b[1];
    useEffect(function () {
        if (typeof handle === 'string') {
            var listener_1 = function () {
                if (typeof handle === 'string') {
                    var cached = getEnsAvatar(handle);
                    if (cached) {
                        setState(cached);
                    }
                }
            };
            document.addEventListener(handle + 'ens avatar cache update', listener_1);
            return function () {
                document.removeEventListener(handle + 'ens avatar cache update', listener_1);
            };
        }
    }, [handle]);
    useEffect(function () {
        var fetchAvatar = function (handle) { return __awaiter(void 0, void 0, void 0, function () {
            var avatar, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setEnsAvatar(handle, { status: 'fetching', avatar: undefined });
                        setState({ status: 'fetching', avatar: undefined });
                        return [4 /*yield*/, provider.getAvatar(handle)];
                    case 1:
                        avatar = _a.sent();
                        result = avatar === null
                            ? { status: 'settled', avatar: undefined }
                            : { status: 'settled', avatar: avatar || undefined };
                        setEnsAvatar(handle, result);
                        setState(result);
                        return [2 /*return*/];
                }
            });
        }); };
        if (typeof handle === 'string') {
            var cached = getEnsAvatar(handle);
            if (cached) {
                setState(cached);
            }
            else {
                fetchAvatar(handle);
            }
        }
    }, [handle]);
    return state;
};

var InfoCard = function (_a) {
    var variant = _a.variant, peerName = _a.peerName;
    var dispatch = useRelay(function (state) { return state.dispatch; });
    var wallet = useReceiver(function (state) { return state.wallet; });
    if (variant === 'invalid ENS') {
        return (React.createElement("div", { className: "InfoCard FullMiddleSection" },
            React.createElement("div", { className: "InfoCard CardContainer" },
                React.createElement("div", { className: "InfoCard Title" }, "Could not resolve ENS name"),
                React.createElement("div", { className: "InfoCard Text" }, 'Make sure to include the ".eth" suffix.')),
            React.createElement(BrandedFooter, null)));
    }
    else if (variant === 'no wallet') {
        return (React.createElement("div", { className: "InfoCard FullMiddleSection" },
            React.createElement("div", { className: "InfoCard CardContainer" },
                React.createElement("div", { className: "InfoCard Title" }, "Please connect a wallet"),
                React.createElement("div", { className: "InfoCard Text" }, "To sign in to XMTP, you will need a connected wallet first.")),
            React.createElement(BrandedFooter, null)));
    }
    else if (variant === 'no peer') {
        return (React.createElement("div", { className: "InfoCard FullMiddleSection" },
            React.createElement("div", { className: "InfoCard CardContainer" },
                React.createElement("div", { className: "InfoCard Title" }, "User not on network"),
                React.createElement("div", { className: "InfoCard Text" }, "This user is not on the XMTP messaging network yet.")),
            React.createElement(BrandedFooter, null)));
    }
    else if (variant === 'no xmtp client') {
        return (React.createElement("div", { className: "InfoCard FullMiddleSection" },
            React.createElement("div", { className: "InfoCard CardContainer" },
                React.createElement("div", { className: "InfoCard Title" }, "Initialize XMTP Client"),
                React.createElement("div", { className: "InfoCard Text" }, "To begin messaging, you must first initialize the XMTP client."),
                React.createElement("div", { className: "InfoCard Button", onClick: function () { return wallet && dispatch({ id: 'sign in', wallet: wallet }); } }, "Initialize")),
            React.createElement(BrandedFooter, null)));
    }
    else if (variant === 'waiting for signature') {
        return (React.createElement("div", { className: "InfoCard FullMiddleSection" },
            React.createElement("div", { className: "InfoCard CardContainer" },
                React.createElement("div", { className: "InfoCard Title" }, "Initialize XMTP Client"),
                React.createElement("div", { className: "InfoCard Text" },
                    React.createElement("b", null, "Initializing.")),
                React.createElement("div", { className: "InfoCard Text" }, "To continue, please sign the wallet prompt."),
                React.createElement("button", { className: "InfoCard Button Disabled" }, "Waiting...")),
            React.createElement(BrandedFooter, null)));
    }
    else if (variant === 'signature denied') {
        return (React.createElement("div", { className: "InfoCard FullMiddleSection" },
            React.createElement("div", { className: "InfoCard CardContainer" },
                React.createElement("div", { className: "InfoCard Title" }, "Initialize XMTP Client"),
                React.createElement("div", { className: "InfoCard Text" },
                    React.createElement("b", null, "Initializing.")),
                React.createElement("div", { className: "InfoCard Text" }, "Signature request cancelled. Try again..."),
                React.createElement("div", { className: "InfoCard Button", onClick: function () { return wallet && dispatch({ id: 'sign in', wallet: wallet }); } }, "Initialize")),
            React.createElement(BrandedFooter, null)));
    }
    else if (variant === 'no messages') {
        return (React.createElement("div", { className: "InfoCard FullMiddleSection" },
            React.createElement("div", { className: "InfoCard CardContainer" },
                React.createElement("div", { className: "InfoCard Title" }, 'All Set  🎉'),
                React.createElement("div", { className: "InfoCard Text" }, "This is the beginning of your encrypted conversation with ".concat(peerName)))));
    }
    else if (variant === 'new conversation') {
        return (React.createElement("div", { className: "InfoCard FullMiddleSection" },
            React.createElement("div", { className: "InfoCard CardContainer" },
                React.createElement("div", { className: "InfoCard Text" }, "Only those who have previously signed into the XMTP network are reachable.")),
            React.createElement(BrandedFooter, null)));
    }
    else {
        throw new Error('We never should have got here!');
    }
};
var BrandedFooter = function () {
    return (React.createElement("footer", { className: "InfoCard Footer" },
        React.createElement("a", { className: "InfoCard FooterLink", href: "https://try.relay.cc", target: "_blank", rel: "noreferrer" },
            React.createElement("img", { style: {
                    height: '30px',
                    width: '30px',
                }, src: "https://relay-receiver-prod.s3.amazonaws.com/smallLogo.png", alt: "Relay Logo" })),
        React.createElement("a", { className: "InfoCard FooterLink", href: "https://docs.relay.cc/relay/relay-receiver/overview", target: "_blank", rel: "noreferrer" },
            React.createElement("h3", { className: "InfoCard WordMark" }, "Relay Receiver"))));
};

var NewConversation$1 = function (_a) {
    var onClickCreate = _a.onClickCreate;
    var _b = useState(''), peerAddress = _b[0], setPeerAddress = _b[1];
    var _c = useState(false), isError = _c[0], setisError = _c[1];
    return (React.createElement("div", { className: "NewConversation NewMessage" },
        React.createElement("form", { className: "NewConversation Form", onSubmit: function (e) {
                e.preventDefault();
                if (!isEnsName(peerAddress) &&
                    !isEthAddress(peerAddress) &&
                    !isLensName(peerAddress)) {
                    setisError(true);
                }
                else {
                    onClickCreate(peerAddress);
                }
            } },
            isError && (React.createElement("span", { className: "NewConversation ErrorMessage" }, "Please enter a valid handle...")),
            React.createElement("input", { className: "NewConversation Input", autoFocus: true, placeholder: "Enter an ENS name, Lens handle, or ETH address...", type: "text", value: peerAddress, onChange: function (e) {
                    setisError(false);
                    setPeerAddress(e.currentTarget.value);
                } }),
            React.createElement("button", { className: "NewConversation Button", type: "submit" }, "Create a New Conversation")),
        React.createElement(InfoCard, { variant: 'new conversation' })));
};

function LoadingSpinner(props) {
    var height = props.height, width = props.width;
    return (React.createElement("div", { className: "LoadingSpinner" },
        React.createElement("img", { src: 'https://relay-receiver-prod.s3.amazonaws.com/MobileLoadingSpinner.png', alt: "loading", width: width, height: height })));
}

var Avatar = function (_a) {
    var handle = _a.handle, onClick = _a.onClick, large = _a.large;
    var lensAddress = useLensAddress({
        handle: isLensName(handle) ? handle : null,
    });
    var ensAddress = useEnsAddress({
        handle: isEnsName(handle) ? handle : null,
    });
    var ens = useEnsName({ handle: isEthAddress(handle) ? handle : null });
    var avatar = useEnsAvatar({
        handle: lensAddress.address || ensAddress.address || ens.name || handle || 'TODO',
    });
    if (avatar.status === 'fetching') {
        return React.createElement(LoadingSpinner, { width: large ? 50 : 40, height: large ? 50 : 40 });
    }
    else if (!avatar.avatar) {
        return (React.createElement("div", { className: "Avatar BlockiesContainer large-".concat(large), onClick: onClick },
            React.createElement(Blockies, { seed: handle || 'no address', size: 10, scale: large ? 5 : 4, className: 'circle' })));
    }
    else {
        return (React.createElement("img", { className: "Avatar AvatarImage large-".concat(large), onClick: onClick, src: avatar.avatar, alt: "user" }));
    }
};

var ConversationListItem = function (_a) {
    var peerAddress = _a.peerAddress, subtitle = _a.subtitle;
    var dispatch = useReceiver(function (state) { return state.dispatch; });
    var name = useEnsName({
        handle: peerAddress,
    }).name;
    var responsiveName = useResponsiveName(name, peerAddress, '');
    return (React.createElement("li", { className: "ConversationListItem ListItem", onClick: function () {
            return dispatch({
                id: 'go to screen',
                screen: { id: 'messages', peerAddress: peerAddress },
            });
        } },
        React.createElement(Avatar, { handle: peerAddress, onClick: function () { return null; } }),
        React.createElement("div", { className: "ConversationListItem TextContainer" },
            React.createElement("span", { className: "ConversationListItem Title" }, responsiveName),
            React.createElement("span", { className: "ConversationListItem Subtitle" }, subtitle))));
};

var ConversationList = function () {
    var conversationList = useRelay(function (state) { return state.channels.conversationList; });
    var client = useRelay(function (state) { return state.client; });
    if (client === null || conversationList === undefined) {
        throw new Error('Never should have been here!');
    }
    else {
        return (React.createElement("ul", { className: "ConversationList List" }, byMostRecentMessage(conversationList)
            .map(function (i) { return i; })
            .reverse()
            .map(function (message) { return (React.createElement(ConversationListItem, { key: pickPeerAddress(client.address, message), peerAddress: pickPeerAddress(client.address, message), subtitle: message.content })); })));
    }
};

var LoadingList = function () {
    var divScrollToRef = useRef(null);
    useEffect(function () {
        if (!divScrollToRef.current)
            return;
        divScrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }, []);
    return (React.createElement("div", { className: "MainContainer LoadingList" },
        React.createElement("div", { className: "LoadingList LeftContainer" },
            React.createElement("div", { className: "LoadingList LeftUserInfo" },
                React.createElement("div", { className: "LoadingList LogoOutline" }),
                React.createElement("div", { className: "LoadingList NameOutline" }),
                React.createElement("div", { className: "LoadingList DateOutline" })),
            React.createElement("div", { className: "LoadingList LeftMessageContainer" },
                React.createElement("div", { className: "LoadingList FirstMessage" }),
                React.createElement("div", { className: "LoadingList SecondMessage" }))),
        React.createElement("div", { className: "LoadingList RightContainer" },
            React.createElement("div", { className: "LoadingList RightUserInfo" },
                React.createElement("div", { className: "LoadingList LogoOutline" }),
                React.createElement("div", { className: "LoadingList NameOutline" }),
                React.createElement("div", { className: "LoadingList DateOutline" })),
            React.createElement("div", { className: "LoadingList RightMessageContainer" },
                React.createElement("div", { className: "LoadingList FirstMessage" })))));
};

var MessageBubble = function (_a) {
    var message = _a.message;
    return (React.createElement("div", { className: "MessageBubble TextWrapper" },
        React.createElement("div", { className: "MessageBubble MessageText" }, message)));
};

function MessagesBucket(_a) {
    var startDate = _a.startDate, messages = _a.messages, sentByAddress = _a.sentByAddress, userPeerAddress = _a.userPeerAddress;
    var sentByMe = sentByAddress === userPeerAddress;
    var senderName = useEnsName({
        handle: sentByAddress,
    }).name;
    var peerEns = useEnsName({
        handle: sentByAddress,
    }).name;
    var responsiveName = useResponsiveName(sentByMe ? senderName : peerEns, sentByMe ? userPeerAddress : sentByAddress, '');
    if (messages.length === 0)
        return null;
    return (React.createElement("div", { className: "MessagesBucket Container" },
        React.createElement("div", { className: "MessagesBucket SentByInfo" },
            React.createElement("div", { className: "MessagesBucket MessageHeader" },
                React.createElement("div", { style: { marginRight: '10px' } },
                    React.createElement(Avatar, { handle: sentByAddress, onClick: function () { return null; } })),
                React.createElement("div", { className: "MessagesBucket SenderName black-".concat(sentByMe, " white-").concat(sentByMe) }, responsiveName),
                React.createElement("div", { className: "MessagesBucket MessageTime" }, shortDate(startDate) + ', ' + time(startDate)))),
        React.createElement("div", { className: "MessagesBucket FlexColReverseContainer" }, messages.map(function (e) {
            return (React.createElement("div", { className: "MessagesBucket MessagePosition", key: e.id },
                React.createElement(MessageBubble, { message: e.content })));
        }))));
}

var MessageList = function (_a) {
    var peerAddress = _a.peerAddress;
    var client = useRelay(function (state) { return state.client; });
    var channels = useRelay(function (state) { return state.channels; });
    var channel = channels[peerAddress];
    if (channel !== undefined && client !== null) {
        var buckets = getMessageBuckets(byMostRecentMessage(channel)
            .map(function (i) { return i; })
            .reverse());
        return (React.createElement("div", { className: "MessageList List" }, buckets.map(function (bucket, index) {
            if (bucket.length > 0) {
                return (React.createElement(MessagesBucket, { key: index, messages: bucket, userPeerAddress: client.address, startDate: bucket[bucket.length - 1].sent, peerName: peerAddress, sentByAddress: bucket[0].senderAddress }));
            }
            return null;
        })));
    }
    else {
        return null;
    }
};
// This assumets messages are sorted by date already.
function getMessageBuckets(messages) {
    return messages.reduce(function (buckets, message) {
        var _a, _b;
        // If sent isn't set, always add it as it's own bucket
        if (message.sent === undefined) {
            return __spreadArray(__spreadArray([], buckets, true), [[message]], false);
        }
        // We initialize the reducer with [[]] so buckets should always be non-empty.
        var lastBucket = buckets[buckets.length - 1];
        if (lastBucket.length === 0)
            return [[message]];
        // If this is the initial iteration, initialize buckets.
        if (buckets.length === 1 && buckets[0].length === 0) {
            var result = [[message]];
            return result;
        }
        // If the last message in the last bucket is either sent to a different
        // address, undefined, sent is not set on it, or it's older than 5 minutes
        // from the current message, create a new bucket.
        var lastInLastBucket = (_a = buckets[buckets.length - 1]) === null || _a === void 0 ? void 0 : _a[0];
        if ((lastInLastBucket === null || lastInLastBucket === void 0 ? void 0 : lastInLastBucket.recipientAddress) !== message.recipientAddress)
            return __spreadArray(__spreadArray([], buckets, true), [[message]], false);
        if (lastInLastBucket === undefined)
            return __spreadArray(__spreadArray([], buckets, true), [[message]], false);
        if (lastInLastBucket.sent === undefined)
            return __spreadArray(__spreadArray([], buckets, true), [[message]], false);
        if (isFiveMinuteDifference(lastInLastBucket.sent, message.sent)) {
            return __spreadArray(__spreadArray([], buckets, true), [[message]], false);
        }
        // If the first message in the last bucket is either undefined, sent is
        // not set on it, or it's older than an hour from the current message,
        // create a new bucket.
        var firstInLastBucket = (_b = buckets[buckets.length - 1]) === null || _b === void 0 ? void 0 : _b[0];
        if (firstInLastBucket === undefined)
            return __spreadArray(__spreadArray([], buckets, true), [[message]], false);
        if (firstInLastBucket.sent === undefined)
            return __spreadArray(__spreadArray([], buckets, true), [[message]], false);
        if (isHourDifference(firstInLastBucket.sent, message.sent))
            return __spreadArray(__spreadArray([], buckets, true), [[message]], false);
        // If we got here then we just add the current message to the last bucket.
        lastBucket.push(message);
        return buckets;
    }, 
    // If you change this you might break this function, in particular the line
    // where we assert that the last bucket is type Message[].
    [[]]);
}
function isHourDifference(a, b) {
    // 360000 is milliseconds in an hour
    return Math.abs(a.getTime() - b.getTime()) > 3600000;
}
function isFiveMinuteDifference(a, b) {
    // 300000 is milliseconds in 5 minutes
    return Math.abs(a.getTime() - b.getTime()) > 300000;
}

var MessageInput = function (_a) {
    var onSendMessage = _a.onSendMessage;
    var _b = useState(''), inputVal = _b[0], setInputVal = _b[1];
    var handleChange = useCallback(function (e) {
        setInputVal(e.target.value);
    }, []);
    var handleSend = useCallback(function () {
        if (inputVal.length < 1)
            return;
        onSendMessage(inputVal);
        setInputVal('');
    }, [inputVal, onSendMessage]);
    var handleKeyDown = useCallback(function (e) {
        if (e.key === 'Enter')
            handleSend();
    }, [handleSend]);
    return (React.createElement("input", { className: "MessageInput StyledInput", placeholder: "Write a Message...", required: true, value: inputVal, onChange: handleChange, onKeyDown: handleKeyDown }));
};

var LoadingText = function () {
    return (React.createElement("div", { className: "LoadingText LoadingCircleContainer" },
        React.createElement("div", { className: "LoadingText LoadingCircle" }),
        React.createElement("div", { className: "LoadingText LoadingCircle2" }),
        React.createElement("div", { className: "LoadingText LoadingCircle3" })));
};

var AddressInfo = function (_a) {
    var handle = _a.handle;
    var lensAddress = useLensAddress({
        handle: isLensName(handle) ? handle : null,
    });
    var ensAddress = useEnsAddress({
        handle: isEnsName(handle) ? handle : null,
    });
    var ensName = useEnsName({
        handle: isEthAddress(handle) ? handle : null,
    });
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(false), didCopyToClipboard = _c[0], setDidCopyToClipboard = _c[1];
    var primaryId = (function () {
        if (isEnsName(handle)) {
            return handle;
        }
        if (isLensName(handle)) {
            return handle;
        }
        if (isEthAddress(lensAddress.address)) {
            return handle;
        }
        if (isEthAddress(ensAddress.address)) {
            return handle;
        }
        if (isEnsName(ensName.name)) {
            return ensName.name;
        }
        if (lensAddress.status === 'fetching' ||
            ensAddress.status === 'fetching' ||
            ensName.status === 'fetching') {
            return 'loading';
        }
        if (isEthAddress(handle)) {
            return handle;
        }
        else {
            return 'invalid';
        }
    })();
    var secondaryId = (function () {
        if (isEthAddress(handle)) {
            return handle;
        }
        if (isEthAddress(lensAddress.address)) {
            return lensAddress.address;
        }
        if (isEthAddress(ensAddress.address)) {
            return ensAddress.address;
        }
        if (lensAddress.status === 'fetching' ||
            ensAddress.status === 'fetching' ||
            ensName.status === 'fetching') {
            return 'loading';
        }
        else {
            return 'invalid';
        }
    })();
    return (React.createElement("div", { className: "AddressInfo Container", onClick: function () {
            setIsOpen(!isOpen);
        } },
        React.createElement(Avatar, { handle: handle, onClick: function () { return null; } }),
        React.createElement("div", { className: "AddressInfo TextContainer" },
            primaryId === 'loading' && React.createElement(LoadingText, null),
            primaryId === 'loading' || (React.createElement("div", { className: "AddressInfo MainText" }, isEthAddress(primaryId) ? truncateAddress(primaryId) : primaryId)),
            secondaryId === 'loading' && React.createElement(LoadingText, null),
            secondaryId === 'loading' || (React.createElement("div", { className: "AddressInfo SubText" }, truncateAddress(secondaryId))),
            React.createElement("div", { className: "AddressInfo DropdownMenu" },
                React.createElement("li", { className: "AddressInfo DropdownItem", onClick: function () {
                        setDidCopyToClipboard(true);
                        setTimeout(function () { return setDidCopyToClipboard(false); }, 3000);
                        navigator.clipboard.writeText(String(secondaryId));
                    } },
                    didCopyToClipboard || 'Copy Address',
                    didCopyToClipboard && 'Copied',
                    React.createElement(CopyClipboardIcon, null)),
                React.createElement("li", { className: "AddressInfo DropdownItem" },
                    React.createElement("a", { className: "AddressInfo LiLink", href: 'https://relay.cc/' + secondaryId, target: "_blank", rel: "noreferrer" },
                        "Relay",
                        React.createElement(GoToRelayIcon, null))),
                React.createElement("li", { className: "AddressInfo DropdownItem" },
                    React.createElement("a", { className: "AddressInfo LiLink", href: 'https://etherscan.io/address/' + secondaryId, target: "_blank", rel: "noreferrer" },
                        "Etherscan",
                        React.createElement(EtherscanIcon, null)))))));
};
var CopyClipboardIcon = function () {
    return (React.createElement("svg", { style: { paddingRight: '2px' }, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", height: '24px', width: '24px' },
        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" })));
};
var GoToRelayIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", height: '24px', width: '24px' },
        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" })));
};
var EtherscanIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", height: '24px', width: '24px' },
        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" })));
};

var ExitIcon = function (_a) {
    var onClick = _a.onClick, marginLeft = _a.marginLeft, marginRight = _a.marginRight;
    return (React.createElement("svg", { style: { marginLeft: marginLeft, marginRight: marginRight, padding: '0', cursor: 'pointer' }, onClick: onClick, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", height: 28, width: 28 },
        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" })));
};
var GoToConversationsIcon = function (_a) {
    var onClick = _a.onClick, marginLeft = _a.marginLeft, marginRight = _a.marginRight;
    return (React.createElement("svg", { style: { marginRight: marginRight, marginLeft: marginLeft, padding: '0', cursor: 'pointer' }, onClick: onClick, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: 28, width: 28 },
        React.createElement("path", { fillRule: "evenodd", d: "M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z", clipRule: "evenodd" })));
};
var MinimizeIcon = function (_a) {
    var onClick = _a.onClick, marginLeft = _a.marginLeft, marginRight = _a.marginRight;
    return (React.createElement("svg", { style: { marginRight: marginRight, marginLeft: marginLeft, padding: '0', cursor: 'pointer' }, onClick: onClick, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", height: 28, width: 28 },
        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 12h-15" })));
};
var NewConversationIcon = function (_a) {
    var onClick = _a.onClick, marginLeft = _a.marginLeft, marginRight = _a.marginRight;
    return (React.createElement("svg", { style: { marginRight: marginRight, marginLeft: marginLeft, padding: '0', cursor: 'pointer' }, onClick: onClick, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", height: 28, width: 28 },
        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" })));
};

var Header = function () {
    var dispatch = useReceiver(function (state) { return state.dispatch; });
    var setIsOpen = useReceiver(function (state) { return state.setIsOpen; });
    var screenHistory = useReceiver(function (state) { return state.screenHistory; });
    var screen = currentScreen({ screenHistory: screenHistory });
    if (screen.id === 'new conversation') {
        return (React.createElement("div", { className: "Header HeaderWrapper" },
            React.createElement(GoToConversationsIcon, { onClick: function () {
                    return dispatch({ id: 'go to screen', screen: { id: 'conversations' } });
                } }),
            React.createElement("h1", { className: "Header Title" }, "New Conversation"),
            React.createElement(ExitIcon, { onClick: function () {
                    setIsOpen(false);
                } })));
    }
    else if (screen.id === 'conversations') {
        return (React.createElement("div", { className: "Header HeaderWrapper" },
            React.createElement(NewConversationIcon, { onClick: function () {
                    return dispatch({ id: 'go to screen', screen: { id: 'new conversation' } });
                } }),
            React.createElement("h1", { className: "Header Title" }, "Conversations"),
            React.createElement(ExitIcon, { onClick: function () {
                    setIsOpen(false);
                } })));
    }
    else if (screen.id === 'messages') {
        return (React.createElement("div", { className: "Header HeaderWrapper" },
            React.createElement(GoToConversationsIcon, { marginRight: "10px", onClick: function () {
                    return dispatch({ id: 'go to screen', screen: { id: 'conversations' } });
                } }),
            React.createElement(AddressInfo, { handle: screen.peerAddress }),
            React.createElement(MinimizeIcon, { marginLeft: "auto", onClick: function () {
                    dispatch({
                        id: 'add pinned conversation',
                        peerAddress: screen.peerAddress,
                    });
                    setIsOpen(false);
                } }),
            React.createElement(ExitIcon, { onClick: function () {
                    setIsOpen(false);
                } })));
    }
    else {
        throw new Error('Never should have been here!');
    }
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Launcher.Fixed {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  flex-direction: row;\n  margin: 1.5rem;\n}\n\n.Launcher.Container {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n}\n\n.Launcher.LaunchButton {\n  background: white;\n  border: none;\n  border-radius: 50%;\n  height: 3rem;\n  width: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.45);\n}\n\n.Launcher.LaunchButton:hover {\n  cursor: pointer;\n}\n\n.Launcher.AvatarHoverDetails {\n  position: absolute;\n  right: -0.5rem;\n  top: -0.5rem;\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 50%;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  z-index: 100000;\n  background-color: #f5f5f5;\n  cursor: pointer;\n}\n\n.Launcher.AvatarContainer {\n  position: relative;\n  cursor: pointer;\n  margin-bottom: 0.75rem;\n}\n\n.Launcher.AvatarContainer:hover > .Launcher.AvatarHoverDetails {\n  display: block;\n}\n\n.Avatar.AvatarImage {\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n}\n.Avatar.AvatarImage.large-true {\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n}\n\n.Avatar.BlockiesContainer {\n  border-radius: 50%;\n  overflow: hidden;\n  height: 40px;\n  width: 40px;\n}\n\n.Avatar.BlockiesContainer.large-true {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n}\n\n.Window.Fixed {\n  position: fixed;\n  bottom: 0rem;\n  right: 88px;\n}\n\n.Window.Container {\n  width: 400px;\n  height: 500px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 4px;\n  box-shadow: rgb(0 0 0 / 25%) 0px 0px 4px;\n}\n\n.AddressInfo.Container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.AddressInfo.MainText {\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 1;\n  padding-bottom: 4px;\n  color: black;\n}\n\n.AddressInfo.SubText {\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 1;\n}\n\n.AddressInfo.DropdownItem {\n  color: black;\n  cursor: pointer;\n  font-size: 14px;\n  text-decoration: none;\n  border-bottom: 1px solid #eeeeee;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 15px;\n}\n\n.AddressInfo.DropdownItem:hover {\n  background-color: #eeeeee;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n}\n\n.AddressInfo.LiLink {\n  color: black;\n  text-decoration: none;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 600;\n  gap: 8px;\n}\n\n.AddressInfo.DropdownMenu {\n  display: none;\n  flex-direction: column;\n  background: white;\n  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);\n  position: absolute;\n  top: 1rem;\n  border-radius: 4px;\n  opacity: 1;\n  transition: opacity 150ms, visibility 150ms;\n  padding: 0;\n  min-width: 10rem;\n  z-index: 10000000;\n}\n\n.AddressInfo.TextContainer:hover > .AddressInfo.DropdownMenu {\n  display: flex;\n}\n\n.AddressInfo.TextContainer {\n  margin-left: 1rem;\n  font-size: 16px;\n  font-weight: 600;\n  font-family: 'Poppins', sans-serif;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n\n.ConversationList.List {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  padding: 0;\n  margin: 0;\n}\n\n.ConversationListItem.ListItem {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  gap: 10px;\n  box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.25);\n  padding: 15px 10px;\n  cursor: pointer;\n  width: 100%;\n  background-color: transparent;\n  transition: background-color 300ms ease-in-out;\n}\n\n.ConversationListItem.ListItem:hover {\n  background-color: #eeeeee;\n  transition: background-color 300ms ease-in-out;\n}\n\n.ConversationListItem.TextContainer {\n  color: black;\n  font-size: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.ConversationListItem.Title {\n  color: black;\n  font-weight: bold;\n  text-align: start;\n}\n\n.ConversationListItem.Subtitle {\n  color: black;\n  max-width: 250px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: start;\n  padding: 2px 0px;\n}\n\n.ConversationList.Subtitle {\n  color: black;\n  max-width: 250px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: start;\n  padding: 2px 0px;\n}\n\n.Header.HeaderWrapper {\n  text-align: left;\n  border-radius: 4px 4px 0 0;\n  box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.25);\n  color: black;\n  display: flex;\n  justify-content: space-between;\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n  z-index: 1011;\n  background-color: white;\n}\n\n.Header.Title {\n  font-size: 1.25rem;\n  font-family: 'Poppins', sans-serif;\n  color: black;\n  font-weight: 600;\n  opacity: 0.75;\n  text-align: bottom;\n  margin: 0;\n}\n\n.InfoCard.Text {\n  font-family: 'Poppins', sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n  color: #2d2d2d;\n}\n\n.InfoCard.FooterLink {\n  text-decoration: none;\n  cursor: pointer;\n  color: inherit;\n}\n\n.InfoCard.WordMark {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 1.5rem;\n  margin-left: 1rem;\n}\n\n.InfoCard.Footer {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-top: auto;\n}\n\n.InfoCard.FullMiddleSection {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex-grow: 1;\n}\n\n.InfoCard.CardContainer {\n  background: #fbfaff;\n  border: 1px dashed #a6a6a6;\n  border-radius: 4px;\n  width: 227px;\n  padding: 10px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow-wrap: break-word;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.InfoCard.Title {\n  color: #686868;\n  font-family: 'Poppins', sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 18px;\n  text-align: center;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #e4e4e4;\n}\n\n.InfoCard.Button {\n  padding: 8px 12px;\n  border: 1px solid rgba(55, 41, 125, 0.5);\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 4px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  align-self: stretch;\n  justify-content: center;\n  font-size: 12px;\n  font-family: 'Poppins', sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 15px;\n  background: #5203fc;\n  font-size: 14px;\n  color: white;\n  transition: all 0.1s ease-in-out;\n}\n.InfoCard.Button.Disabled {\n  padding: 8px 12px;\n  border: 1px solid rgba(55, 41, 125, 0.5);\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 4px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  align-self: stretch;\n  justify-content: center;\n  font-size: 12px;\n  font-family: 'Poppins', sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 15px;\n  background: #5203fc;\n  font-size: 14px;\n  color: white;\n  filter: brightness(150%);\n}\n\n.InfoCard.Button:hover {\n  cursor: pointer;\n  filter: brightness(1.1);\n}\n\n.LoadingList.LeftContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n\n.LoadingList.RightContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n\n.LoadingList.LogoOutline {\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  background-color: #777;\n  opacity: 0.2;\n  animation: RelayLoadingListSlide 1500ms ease-in-out infinite;\n}\n\n.LoadingList.NameOutline {\n  height: 22px;\n  width: 78px;\n  border-radius: 8px;\n  background-color: #777;\n  opacity: 0.2;\n  animation: RelayLoadingListSlide 1500ms ease-in-out infinite;\n}\n\n.LoadingList.DateOutline {\n  width: 96px;\n  height: 17px;\n  border-radius: 8px;\n  background-color: #777;\n  opacity: 0.2;\n  animation: RelayLoadingListSlide 1500ms ease-in-out infinite;\n}\n\n.LoadingList.FirstMessage {\n  width: 355px;\n  height: 60px;\n  border-radius: 8px;\n  background-color: #777;\n  opacity: 0.2;\n  animation: RelayLoadingListSlide 1500ms ease-in-out infinite;\n}\n\n.LoadingList.SecondMessage {\n  width: 155px;\n  height: 60px;\n  border-radius: 8px;\n  background-color: #777;\n  opacity: 0.2;\n  animation: RelayLoadingListSlide 1500ms ease-in-out infinite;\n}\n\n.LoadingList.MainContainer {\n  display: flex;\n  flex-direction: column-reverse;\n  overflow: hidden;\n  gap: 0.75rem;\n  width: 100%;\n  z-index: 10;\n  max-height: 345px;\n  padding: 12px;\n}\n\n.LoadingList.LeftUserInfo {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n}\n\n.LoadingList.RightUserInfo {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  gap: 13px;\n}\n\n.LoadingList.LeftMessageContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n\n.LoadingText.LoadingCircleContainer {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px;\n}\n\n.LoadingText.LoadingCircle {\n  color: white;\n  height: 5px;\n  width: 5px;\n  background: #c3c2c2;\n  border-radius: 50%;\n  animation: pulse 1500ms ease-in-out infinite;\n}\n.LoadingText.LoadingCircl2 {\n  color: white;\n  height: 5px;\n  width: 5px;\n  background: #c3c2c2;\n  border-radius: 50%;\n  animation: RelayLoadingCirclePulse2 1500ms ease-in-out infinite;\n}\n.LoadingText.LoadingCircl3 {\n  color: white;\n  height: 5px;\n  width: 5px;\n  background: #c3c2c2;\n  border-radius: 50%;\n  animation: RelayLoadingCirclePulse3 1500ms ease-in-out infinite;\n}\n\n.LoadingList.RightMessageContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.LoadingSpinnerContainer {\n  animation: relayReceiverSpin 1500ms linear infinite;\n  width: max-content;\n  height: max-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border-radius: 50%;\n}\n\n.MessageBubble.TextWrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n  hyphens: auto;\n  padding: 3px 0 3px 50px;\n}\n\n.MessageBubble.MessageText {\n  color: #060028;\n  font-family: 'Poppins', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.25;\n  word-break: break-word;\n  text-align: start;\n  padding-left: 4px;\n}\n\n.MessageBucket.SentByInfo {\n  display: flex;\n}\n\n.MessagesBucket.SenderName.black-false.white-false {\n  font-weight: bold;\n  font-size: 14px;\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);\n  padding: 3px 6px;\n  background-color: #f1f2fd;\n  color: #6e6b99;\n  border-radius: 99rem;\n}\n\n.MessagesBucket.SenderName.black-true.white-true {\n  font-weight: bold;\n  font-size: 14px;\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);\n  padding: 3px 6px;\n  background-color: white;\n  color: black;\n  border-radius: 99rem;\n}\n\n.MessageInput.StyledInput {\n  height: 2rem !important;\n  padding: 3px 0px 3px 10px;\n  display: flex;\n  margin: 1rem 0.5rem 1rem 0.5rem;\n  margin-top: auto;\n  border-radius: 6px;\n  border: none;\n  outline: none;\n  color: #333333;\n  font-family: 'Poppins', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  box-shadow: rgb(0 0 0 / 25%) 0px 0px 4px;\n}\n\n.MessageInput.StyledInput::placeholder {\n  color: #333c4f;\n}\n\n.MessageList.List {\n  display: flex;\n  flex-direction: column-reverse;\n  overflow-y: scroll;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  padding-bottom: 0;\n  box-sizing: border-box;\n}\n\n.MessagesBucket.Container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 1rem;\n}\n\n.MessagesBucket.MessagePosition {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  gap: 10px;\n  align-self: flex-start;\n}\n\n.MessagesBucket.MessagePosition:first-of-type {\n  padding-bottom: 4px;\n}\n\n.MessagesBucket.MessageHeader {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: -18px;\n}\n\n.MessagesBucket.SentByInfo {\n  display: flex;\n}\n\n.MessagesBucket.MessageTime {\n  font-family: 'Poppins', sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  margin-left: 8px;\n  color: rgb(6, 0, 40, 0.4);\n  transform: translateY(2px);\n}\n\n.MessagesBucket.FlexColReverseContainer {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.NewConversation.NewMessage {\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  background-color: white;\n  box-shadow: 0px -4px 4px -5px rgba(0, 0, 0, 0.25);\n  gap: 20px;\n  padding: 0 10px 0 10px;\n}\n\n.NewConversation.Input {\n  display: flex;\n  flex-grow: 1;\n  background-color: white;\n  border-radius: 4px;\n  display: flex;\n  align-self: stretch;\n  outline: none;\n  border: none;\n  padding: 5px 10px;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  margin-bottom: 1rem;\n  height: 1.5rem;\n}\n\n.NewConversation.Button {\n  padding: 8px 12px;\n  border: 1px solid rgba(55, 41, 125, 0.5);\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 4px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  align-self: stretch;\n  justify-content: center;\n  font-size: 12px;\n  font-family: 'Poppins', sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 15px;\n  background: #5203fc;\n  font-size: 14px;\n  color: white;\n  min-height: 1.5rem;\n  transition: all 0.1s ease-in-out;\n}\n\n.NewConversation.Button:hover {\n  cursor: pointer;\n  filter: brightness(1.1);\n}\n\n.NewConversation.Form {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  margin-top: 1rem;\n  padding-top: 1.5rem;\n}\n\n.NewConversation.ErrorMessage {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: red;\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n\n.Intercom.Fixed {\n  position: fixed;\n  bottom: 0;\n}\n\n.Intercom.Fixed.position-right {\n  right: 88px;\n}\n\n.Intercom.Fixed.position-left {\n  left: 88px;\n}\n\n.Modal.Overlay {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(2px);\n}\n\n@keyframes RelayLoadingListSlide {\n  0% {\n    /* background-position: left 100% bottom 50%; */\n    background-color: #777;\n  }\n  40% {\n    /* background-position: right 100% bottom 50%; */\n    background-color: #cfcccc;\n  }\n  60% {\n    /* background-position: right 100% bottom 50%; */\n    background-color: #cfcccc;\n  }\n  100% {\n    /* background-position: right 100% bottom 50%; */\n    background-color: #777;\n  }\n}\n\n@keyframes relayReceiverSpin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes RelayLoadingCirclePulse1 {\n  0% {\n    transform: scale(0);\n  }\n  25% {\n    transform: scale(1.1);\n  }\n  50% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes RelayLoadingCirclePulse2 {\n  0% {\n    transform: scale(0);\n  }\n  25% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes RelayLoadingCirclePulse3 {\n  0% {\n    transform: scale(0);\n  }\n  25% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1.1);\n  }\n}\n";
styleInject(css_248z);

var Launcher = function (_a) {
    var peerAddress = _a.peerAddress, wallet = _a.wallet;
    // Rename here because we want to think of the input as a handle internally,
    // even though the public prop is still called `peerAddress`.
    var inputHandle = peerAddress;
    var client = useRelay(function (state) { return state.client; });
    var dispatchRelay = useRelay(function (state) { return state.dispatch; });
    var pinnedConversations = useReceiver(function (state) { return state.pinnedConversations; });
    var setIsOpen = useReceiver(function (state) { return state.setIsOpen; });
    var isOpen = useReceiver(function (state) { return state.isOpen; });
    var dispatchReceiver = useReceiver(function (state) { return state.dispatch; });
    var launch = useLaunch(wallet);
    var onClickLaunch = function () {
        if (isOpen) {
            setIsOpen(false);
        }
        else {
            launch(inputHandle);
        }
    };
    useEffect(function () {
        if (client !== null) {
            dispatchRelay({ id: 'stream messages' });
        }
    }, [client]);
    return (React.createElement("div", { className: "Launcher Fixed" },
        React.createElement("ul", { className: "Launcher Container" },
            React.createElement("button", { className: "Launcher LaunchButton", onClick: onClickLaunch },
                React.createElement(ChatIcon, null)),
            pinnedConversations.map(function (peerAddress) { return (React.createElement("div", { className: "Launcher AvatarContainer", key: peerAddress },
                React.createElement(Avatar, { large: true, handle: peerAddress, onClick: function () {
                        dispatchReceiver({
                            id: 'go to screen',
                            screen: { id: 'messages', peerAddress: peerAddress },
                        });
                        setIsOpen(true);
                    } }),
                React.createElement("div", { className: "Launcher AvatarHoverDetails", onClick: function () {
                        dispatchReceiver({
                            id: 'remove pinned conversation',
                            peerAddress: peerAddress,
                        });
                    } },
                    React.createElement(CloseIcon, null)))); }))));
};
var ChatIcon = function () {
    return (React.createElement("svg", { fill: "white", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "#5203fc", height: '24px', width: '24px' },
        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" })));
};
var CloseIcon = function () {
    return (React.createElement("svg", { fill: "black", viewBox: "0 0 28 28", strokeWidth: 2.5, stroke: "black", height: "28", width: "28" },
        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" })));
};

var PeerAddress = function (_a) {
    var handle = _a.handle;
    var lensAddress = useLensAddress({
        handle: isLensName(handle) ? handle : null,
    });
    var ensAddress = useEnsAddress({
        handle: isEnsName(handle) ? handle : null,
    });
    var peerAddress = lensAddress.address || ensAddress.address || handle || 'TODO';
    var client = useRelay(function (state) { return state.client; });
    var dispatch = useRelay(function (state) { return state.dispatch; });
    var channels = useRelay(function (state) { return state.channels; });
    var channel = channels[peerAddress];
    var statuses = useRelay(function (state) { return state.statuses; });
    var wallet = useReceiver(function (state) { return state.wallet; });
    var channelStatus = statuses[peerAddress];
    var signatureStatus = useRelay(function (state) { return state.signatureStatus; });
    useEffect(function () {
        if (client !== null && isEthAddress(peerAddress)) {
            dispatch({ id: 'load peer address', peerAddress: peerAddress });
        }
    }, [client, peerAddress]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        (function () {
            if (wallet === null) {
                return React.createElement(InfoCard, { variant: "no wallet" });
            }
            else if (channelStatus === 'no peer') {
                return React.createElement(InfoCard, { variant: "no peer" });
            }
            else if (signatureStatus === 'waiting') {
                return React.createElement(InfoCard, { variant: "waiting for signature" });
            }
            else if (signatureStatus === 'denied') {
                return React.createElement(InfoCard, { variant: "signature denied" });
            }
            else if (client === null) {
                return React.createElement(InfoCard, { variant: "no xmtp client" });
            }
            else if (channelStatus === 'loadingFull' ||
                channelStatus === undefined) {
                return (React.createElement(React.Fragment, null,
                    React.createElement(LoadingList, null),
                    React.createElement(MessageInput, { onSendMessage: function (message) {
                            return client && client.sendMessage(peerAddress, message);
                        } })));
            }
            else if (channelStatus === 'loadedFull' &&
                channel &&
                isEmpty(channel)) {
                return (React.createElement(React.Fragment, null,
                    React.createElement(InfoCard, { variant: "no messages" }),
                    React.createElement(MessageInput, { onSendMessage: function (message) {
                            return client && client.sendMessage(peerAddress, message);
                        } })));
            }
            else {
                return (React.createElement(React.Fragment, null,
                    React.createElement(MessageList, { peerAddress: peerAddress }),
                    React.createElement(MessageInput, { onSendMessage: function (message) {
                            return client && client.sendMessage(peerAddress, message);
                        } })));
            }
        })()));
};

var Conversations = function () {
    var client = useRelay(function (state) { return state.client; });
    var dispatch = useRelay(function (state) { return state.dispatch; });
    var wallet = useReceiver(function (state) { return state.wallet; });
    var statuses = useRelay(function (state) { return state.statuses; });
    var channelStatus = statuses.conversationList;
    var signatureStatus = useRelay(function (state) { return state.signatureStatus; });
    useEffect(function () {
        if (client !== null) {
            dispatch({ id: 'load conversation list' });
        }
    }, [client]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        (function () {
            if (wallet === null) {
                return React.createElement(InfoCard, { variant: "no wallet" });
            }
            else if (signatureStatus === 'waiting') {
                return React.createElement(InfoCard, { variant: "waiting for signature" });
            }
            else if (signatureStatus === 'denied') {
                return React.createElement(InfoCard, { variant: "signature denied" });
            }
            else if (client === null) {
                return React.createElement(InfoCard, { variant: "no xmtp client" });
            }
            else if (channelStatus === 'loadingFull') {
                return React.createElement(LoadingList, null);
            }
            else if (channelStatus === 'loadedFull') {
                return React.createElement(ConversationList, null);
            }
            else {
                return React.createElement(LoadingList, null);
            }
        })()));
};

var NewConversation = function () {
    var dispatch = useReceiver(function (state) { return state.dispatch; });
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement(NewConversation$1, { onClickCreate: function (peerAddress) {
                dispatch({
                    id: 'go to screen',
                    screen: { id: 'messages', peerAddress: peerAddress },
                });
            } })));
};

var Window = function (_a) {
    var className = _a.className;
    var screenHistory = useReceiver(function (state) { return state.screenHistory; });
    var visibleScreen = currentScreen({ screenHistory: screenHistory });
    var client = useRelay(function (state) { return state.client; });
    var dispatch = useRelay(function (state) { return state.dispatch; });
    useEffect(function () {
        if (client !== null) {
            dispatch({ id: 'stream messages' });
        }
    }, [client]);
    var screen = useMemo(function () {
        if (visibleScreen.id === 'conversations') {
            return React.createElement(Conversations, null);
        }
        else if (visibleScreen.id === 'messages') {
            return React.createElement(PeerAddress, { handle: visibleScreen.peerAddress });
        }
        else if (visibleScreen.id === 'new conversation') {
            return React.createElement(NewConversation, null);
        }
        else {
            throw new Error('Unspported screen: ' + String(screen));
        }
    }, [visibleScreen]);
    return React.createElement("div", { className: "".concat(className, " Window Container") }, screen);
};

var AnimatePresence$1 = AnimatePresence$2;
var VARIANTS$1 = {
    hide: { opacity: 0, transition: { duration: 0.5 } },
    invisible: { visibility: 'hidden', transition: { delay: 0.5 } },
    show: { opacity: 1, transition: { duration: 0.5 } },
    visible: { visibility: 'visible', transition: { duration: 0.5 } },
};
var Modal = function (_a) {
    var isOpen = _a.isOpen, children = _a.children;
    var isOpenState = useIsOpen();
    var isActuallyOpen = isOpen === undefined ? isOpenState : isOpen;
    return (React.createElement(AnimatePresence$1, null, isActuallyOpen && (React.createElement(motion.div, { className: "Modal Overlay", key: "receiver-modal", initial: ['hide', 'invisible'], animate: ['show', 'visible'], exit: ['hide', 'invisible'], variants: VARIANTS$1 }, children))));
};

var AnimatePresence = AnimatePresence$2;
var VARIANTS = {
    hide: { maxHeight: 0, transition: { duration: 0.5 } },
    show: { maxHeight: '500px', transition: { duration: 0.5 } },
};
var Intercom = function (_a) {
    var isOpen = _a.isOpen, children = _a.children, position = _a.position;
    var isOpenState = useIsOpen();
    var isActuallyOpen = isOpen === undefined ? isOpenState : isOpen;
    return (React.createElement(AnimatePresence, null, isActuallyOpen && (React.createElement(motion.div, { className: "Intercom Fixed ".concat('position-' + (position || 'right')), key: "receiver-modal", initial: "hide", animate: "show", exit: "hide", variants: VARIANTS }, children))));
};

export { Intercom, Launcher, Modal, Window, useIsOpen, useLaunch, useSetWallet };
//# sourceMappingURL=index.js.map
